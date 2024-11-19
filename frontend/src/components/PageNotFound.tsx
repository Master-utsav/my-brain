import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`w-full flex flex-col items-center justify-center h-screen dark:bg-black-[#121212] bg-white-[#f5f5f5] px-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-5xl mb-6 text-center text-transparent bg-clip-text font-medium font-
        font-kalnia bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-500">404 Page Not Found</h1>
      <p className="text-lg mb-8 text-center">
        Oops! this page is not found <br />
      </p>
      
      <HoverBorderGradient
        onClick={() => navigate("/user/note-box")}
        className={`text-lg font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white`}
      >
        Back to DashBoard
      </HoverBorderGradient>
    </motion.div>
  );
};

export default PageNotFound;
