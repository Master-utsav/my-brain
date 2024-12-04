import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseButton from "../ui/CloseButton";
import UserButton from "../ui/DashBoardButton";
import axios from "axios";
import { CONTENT_API, FRONTEND_DOMAIN } from "@/lib/env";
import { useContentContext } from "@/context/ContentContext";
import LinkReadInput from "../ui/LinkReadInput";
import { getVerifiedToken } from "@/lib/cookieService";

interface shareCardModalProps {
  isOpen: boolean;
  cardId: string;
  isShareable: boolean;
  onClose: () => void;
}

const shareCardModal: React.FC<shareCardModalProps> = ({
  isOpen,
  cardId,
  isShareable=false,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {loadContentData} = useContentContext();
  const token = getVerifiedToken();

  async function handleConfirmBtn() {
    if (!cardId) return;
    setLoading(true);
    setError(null);

    if(!token){
        setError('You must be logged in to share this card.');
    }
    
    try {
      const response = await axios.post(`${CONTENT_API}/shareable/${cardId}` , {} , {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
      });
      if (response.data.success) {
        console.log(response.data.message);
        await loadContentData();
      } else {
        setError("Failed to fetch content data.");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "An error occurred while fetching content."
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
            Share Modal
          </motion.h2>
          {!isShareable ? 
          <>
          <p className="mt-2 text-center font-ubuntu dark:text-white-600 text-black-200">
            Are you sure you want to make it shareable ?
          </p>

          <div className="w-full relative overflow-hidden bg-transparent flex justify-center items-center">
            {<UserButton ButtonName="Confirm" onClickBtn={handleConfirmBtn} className="dark:text-blue-300 text-blue-500"/> }
          </div>
          </>
          :
          <>
          <p className="mt-2 text-center font-ubuntu dark:text-white-600 text-black-200">
            Here is your modal share link!!!
          </p>

          <div className="w-full relative overflow-hidden bg-transparent flex justify-center items-center">
            {<LinkReadInput link={`${FRONTEND_DOMAIN}/view-card/${cardId}`}/>}
          </div>
          <>
          <p className="mt-2 text-center font-ubuntu dark:text-white-600 text-black-200">
            you want to make it un-shareable ?
          </p>

          <div className="w-full relative overflow-hidden bg-transparent flex justify-center items-center">
            {<UserButton ButtonName="Confirm" onClickBtn={handleConfirmBtn} className="dark:text-red-300 text-red-500"/> }
          </div>
          </>
          </>
          }
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default shareCardModal;
