import { AnimatePresence, motion } from "framer-motion";
import { useContentContext } from "@/context/ContentContext";
import UniversalCard from "@/components/card/UniversalCard";
import { useState } from "react";
import ImageFormModal from "@/components/modal/ImageFormModal";
import LinkFormModal from "@/components/modal/LinkFormModal";
import NoteFormModal from "@/components/modal/NoteFormModal";
import TagFormModal from "@/components/modal/TagFormModal";
import TweetFormModal from "@/components/modal/TweetFormModal";
import { AllContentInterface } from "@/constants";

const AllContentSection = () => {
  const { contentData } = useContentContext();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [cardDetails, setCardDetails] = useState<AllContentInterface>();
  const sortedContentData = Array.isArray(contentData)
    ? contentData.sort((a, b) => {
        const dateA = new Date(a.addedOn).getTime();
        const dateB = new Date(b.addedOn).getTime();
        return dateB - dateA;
      })
    : contentData;

  function handleEditCardFunction(val: boolean) {
    setIsEditModalOpen(val);
  }

  function getCardDetails(val: AllContentInterface) {
    setCardDetails(val);
  }

  return (
    <section className="w-full min-h-[200vh] dark:bg-black/10 bg-white/10 sm:p-5 sm:px-8 p-2">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {Array.isArray(sortedContentData) &&
          sortedContentData.map((item, idx) => (
            <motion.div
              key={item.cardId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
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
            transition={{ duration: 0.5 }}
            className={`absolute w-full min-h-screen flex top-20 md:top-0 left-0 justify-center items-center bg-transparent backdrop-blur-lg z-50 transition-opacity duration-300`}
            onClick={() => handleEditCardFunction(!isEditModalOpen)}
          >
            {cardDetails.type === "note" && (
              <NoteFormModal
                key={cardDetails.cardId}
                cardDetails={cardDetails}
              />
            )}
            {cardDetails.type === "tweet" && (
              <TweetFormModal
                key={cardDetails.cardId}
                cardDetails={cardDetails}
              />
            )}
            {cardDetails.type === "tag" && (
              <TagFormModal
                key={cardDetails.cardId}
                cardDetails={cardDetails}
              />
            )}
            {cardDetails.type === "link" && (
              <LinkFormModal
                key={cardDetails.cardId}
                cardDetails={cardDetails}
              />
            )}
            {cardDetails.type === "image" && (
              <ImageFormModal
                key={cardDetails.cardId}
                cardDetails={cardDetails}
              />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default AllContentSection;
