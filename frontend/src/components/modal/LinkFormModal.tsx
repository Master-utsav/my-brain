import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChooseCategoryItemsItems } from "@/constants";
import UserChooseContentItems from "../user/UserChooseContentItems";
import CloseButton from "../ui/CloseButton";
import { useNavigate } from "react-router-dom";

const LinkFormModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  const onClose = () => {
    setIsOpen((prev) => !prev);
    navigate("/user/link-box")
  };

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

          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:text-3xl text-2xl text-center text-transparent bg-clip-text font-medium font-
        font-kalnia bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-500"
          >
            Save your Links 
          </motion.h2>
          <p className="mt-2 text-center font-ubuntu dark:text-white-600 text-black-200">
            fill the given fields to save link / links 
          </p>

          <div className="w-full relative overflow-hidden bg-transparent">
            <nav className={`gap-2 flex flex-wrap justify-center items-center`}>
              {ChooseCategoryItemsItems.map((item, index) => (
                <UserChooseContentItems
                  key={index}
                  index={index}
                  Icon={item.Icon}
                  title={item.title}
                  link={item.link}
                  onClickBtn={onClose}
                />
              ))}
            </nav>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LinkFormModal;
