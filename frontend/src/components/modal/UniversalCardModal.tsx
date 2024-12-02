import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseButton from "../ui/CloseButton";
import LinkReadInput from "../ui/LinkReadInput";
import { AllContentInterface } from "@/constants";
import AddedOnChip from "../ui/AddedOnChip";
import { RxDot } from "react-icons/rx";
import CardTypeButton from "../ui/CardTypeButton";
import HashTagChips from "../ui/HashTagChips";
import { Image } from "@nextui-org/react";
import { returnTypeIcon } from "../card/UniversalCard";

interface UniversalCardModalProps {
  isOpen: boolean;
  cardDetails: AllContentInterface;
  onClose: () => void;
}

const UniversalCardModal: React.FC<UniversalCardModalProps> = ({
  isOpen,
  cardDetails,
  onClose,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed min-h-screen flex inset-0 justify-center items-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: -100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 100 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white space-y-2 overflow-hidden dark:bg-black rounded-lg  w-full sm:w-96 mx-auto my-16 p-6 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="top-1 right-1 absolute">
            <CloseButton onClickBtn={onClose} />
          </div>
          <div className="w-full h-full relative flex flex-col rounded-lg justify-start shadow-md items-start p-3 gap-2  dark:text-white text-black ">
            <div className="w-full header gap-2 flex justify-between items-start">
              <div className="w-full flex justify-start items-start flex-col gap-1">
                <h1 className="w-full md:text-xl text-lg font-ubuntu dark:text-white-800 text-black-300 group-hover:dark:text-white group-hover:text-black">
                  {cardDetails.title}
                </h1>
              </div>
              <div className="seperator h-full w-[1px] border-[1px] dark:border-white-800/20 border-black-200/20" />

              <div className="flex justify-center items-center flex-col sm:flex-row gap-1">
                <CardTypeButton Icon={returnTypeIcon(cardDetails.type)} />
              </div>
            </div>

            {/* for type image */}
            {cardDetails.type === "image" &&
              typeof cardDetails.image === "string" && (
                <div className="w-24 mx-auto relative">
                  <Image
                    isBlurred
                    className="w-full aspect-square mx-auto object-cover rounded-lg"
                    alt={cardDetails.title}
                    src={cardDetails.image}
                  />
                </div>
              )}

            <p className="mt-2 text-sm font-noto-sans dark:text-white-600 text-black-500/80 group-hover:dark:text-white-800 group-hover:text-black-300">
              {cardDetails.description}
            </p>

            {/* for type note */}
            {cardDetails.type === "note" && (
              <ul className="w-full dark:bg-black-300/40 bg-white-800/40 p-1 rounded-lg dark:shadow-white-500/10 shadow-md ">
                {cardDetails.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="w-full flex justify-start items-center gap-1 text-sm font-noto-sans dark:text-blue-100 text-blue-900"
                  >
                    <RxDot className="size-5 dark:text-blue-200 text-blue-900" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* for type link */}
            {cardDetails.type === "link" ? (
              <div className="w-full dark:bg-black-300/40 bg-white-800/40 p-1 rounded-lg dark:shadow-white-500/10 shadow-md flex flex-col gap-1">
                {cardDetails.link.map((item, idx) => (
                  <LinkReadInput link={item ?? ""} key={idx} />
                ))}
              </div>
            ) : (
              Array.isArray(cardDetails.link) &&
              cardDetails.link.some((link) => link) && (
                <LinkReadInput link={cardDetails.link} />
              )
            )}

            {/* for type tags */}
            {cardDetails.type === "tag" ? (
              <div className="w-full dark:bg-black-300/40 bg-white-800/40 p-1 rounded-lg dark:shadow-white-500/10 shadow-md ">
                {cardDetails.tags && (
                  <div className="flex justify-start items-start flex-wrap gap-1 mt-2">
                    {cardDetails.tags.map((tag, idx) => (
                      <HashTagChips content={tag} key={idx} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              cardDetails.tags && (
                <div className="flex justify-start items-start flex-wrap gap-1 mt-2">
                  {cardDetails.tags.map((tag, idx) => (
                    <HashTagChips content={tag} key={idx} />
                  ))}
                </div>
              )
            )}

            <AddedOnChip date={cardDetails.addedOn} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UniversalCardModal;
