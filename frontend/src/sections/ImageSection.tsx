import UniversalCard from "@/components/card/UniversalCard";
import ImageFormModal from "@/components/modal/ImageFormModal";
import { AllContentInterface, ImageInterface } from "@/constants";
import { useContentContext } from "@/context/ContentContext";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const ImageSection: React.FC = () => {
  const { contentData } = useContentContext();
  const imageData: ImageInterface[] = Array.isArray(contentData)
    ? contentData.filter((item) => item.type === "image")
    : [];

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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {Array.isArray(imageData) &&
          imageData.map((item, idx) => (
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
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed min-h-screen flex inset-0 justify-center items-center bg-black bg-opacity-10 z-50 transition-opacity duration-300 ${
              isEditModalOpen ? "block" : "hidden"
            }`}
            // onClick={() => handleEditCardFunction(!isEditModalOpen)}
          >
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

export default ImageSection;
