import { useEffect, useState } from "react";
import { AllContentInterface } from "@/constants";
import { useContentContext } from "@/context/ContentContext";
import { AnimatePresence, motion } from "framer-motion";
import UniversalCard from "@/components/card/UniversalCard";
import ImageFormModal from "@/components/modal/ImageFormModal";
import LinkFormModal from "@/components/modal/LinkFormModal";
import NoteFormModal from "@/components/modal/NoteFormModal";
import TagFormModal from "@/components/modal/TagFormModal";
import TweetFormModal from "@/components/modal/TweetFormModal";
import { FRONTEND_DOMAIN } from "@/lib/env";
import LinkReadInput from "@/components/ui/LinkReadInput";
import { useAuthContext } from "@/context/AuthContext";

const SelectCardsSection = ({
  onCardsSelect,
}: {
  onCardsSelect: (val: string[]) => void;
}) => {
  const { contentData } = useContentContext();
  const { userData } = useAuthContext();
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

  const toggleCardSelection = (index: string) => {
    setSelectedCards((prev) => {
      const newSelection = new Set(prev);

      if (newSelection.has(index)) {
        newSelection.delete(index);
      } else {
        newSelection.add(index);
      }

      console.log(newSelection);

      onCardsSelect(Array.from(newSelection));

      return newSelection;
    });
  };

  const AllContentData: AllContentInterface[] = Array.isArray(contentData)
    ? contentData
        .filter((item) => item.isShareable === true)
        .sort((a, b) => {
          const dateA = new Date(a.addedOn).getTime();
          const dateB = new Date(b.addedOn).getTime();
          return dateB - dateA;
        })
    : [];

  useEffect(() => {
    const groupedKey = userData.groupedKey;
    const prevCardIds = AllContentData.filter(
      (item) => item.groupedIn === groupedKey
    ).map((item) => item.cardId);

    setSelectedCards(new Set([...prevCardIds]));
  }, [userData.groupedKey , contentData]);

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [cardDetails, setCardDetails] = useState<AllContentInterface>();

  function handleEditCardFunction(val: boolean) {
    setIsEditModalOpen(val);
  }

  function getCardDetails(val: AllContentInterface) {
    setCardDetails(val);
  }

  return (
    <section className="w-full min-h-[200vh] dark:bg-black bg-white p-5 px-8">
      {userData && userData.groupedKey && (
        <div className="w-full relative overflow-hidden bg-transparent flex justify-center items-center mb-2">
          <LinkReadInput
            link={`${FRONTEND_DOMAIN}/view-cards/${userData.groupedKey}`}
          />
        </div>
      )}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(AllContentData) &&
          AllContentData.map((item, idx) => (
            <motion.div
              key={item.cardId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => toggleCardSelection(item.cardId)}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center p-1 border rounded-lg transition-all duration-300 cursor-pointer ${
                selectedCards.has(item.cardId)
                  ? "border-blue-500 dark:bg-blue-300/50 bg-blue-600/50"
                  : "border-gray-300"
              }`}
            >
              <UniversalCard
                cardDetails={item}
                key={item.cardId}
                onEditClick={() => handleEditCardFunction(!isEditModalOpen)}
                setCardDetails={() => getCardDetails(item)}
                isEditModalOpen={isEditModalOpen}
              />
            </motion.div>
          ))}
      </div>

      {isEditModalOpen && cardDetails && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed min-h-screen flex inset-0 justify-center items-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
              isEditModalOpen ? "block" : "hidden"
            }`}
            onClick={() => handleEditCardFunction(!isEditModalOpen)}
          >
            {cardDetails.type === "note" && (
              <NoteFormModal
                key={cardDetails.cardId}
                isEditImageOpen={isEditModalOpen}
                cardDetails={cardDetails}
              />
            )}
            {cardDetails.type === "tweet" && (
              <TweetFormModal
                key={cardDetails.cardId}
                isEditImageOpen={isEditModalOpen}
                cardDetails={cardDetails}
              />
            )}
            {cardDetails.type === "tag" && (
              <TagFormModal
                key={cardDetails.cardId}
                isEditImageOpen={isEditModalOpen}
                cardDetails={cardDetails}
              />
            )}
            {cardDetails.type === "link" && (
              <LinkFormModal
                key={cardDetails.cardId}
                isEditImageOpen={isEditModalOpen}
                cardDetails={cardDetails}
              />
            )}
            {cardDetails.type === "image" && (
              <ImageFormModal
                key={cardDetails.cardId}
                isEditImageOpen={isEditModalOpen}
                cardDetails={cardDetails}
              />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default SelectCardsSection;
