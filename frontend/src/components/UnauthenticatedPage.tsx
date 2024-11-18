import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeProvider";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

const UnauthenticatedPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <motion.div
      className={` flex flex-col items-center justify-center h-screen dark:bg-black-[#121212] bg-white-[#f5f5f5] px-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-5xl font-bold mb-6">401 Unauthenticated</h1>
      <p className="text-lg mb-8 text-center">
        Oops! You don't have access to this page. <br />
        Please log in to continue.
      </p>
      <Button
        onClick={() => navigate("/login")}
        className={`px-6 py-3 rounded-md text-lg transition-all ${
          theme === "dark"
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        Go to Login
      </Button>
      <Button
        onClick={() => navigate("/")}
        className={`mt-4 px-6 py-3 rounded-md text-lg transition-all ${
          theme === "dark"
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Back to Home
      </Button>
    </motion.div>
  );
};

export default UnauthenticatedPage;
