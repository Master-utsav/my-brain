import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeProvider";
import { motion } from "framer-motion";
import {Button} from "@nextui-org/react"

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <motion.div
      className={`flex flex-col items-center justify-center h-screen dark:bg-black-[#121212] bg-white-[#f5f5f5] px-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-5xl mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600  font-extrabold font-ubuntu">404 Page Not Found</h1>
      <p className="text-lg mb-8 text-center">
        Oops! this page is not found <br />
      </p>
      
      <Button
        onClick={() => navigate("/user/note-box")}
        className={`mt-4 px-6 py-3 rounded-md text-lg transition-all ${
          theme === "dark"
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Back to DashBoard
      </Button>
    </motion.div>
  );
};

export default PageNotFound;
