import { FiShare2 } from "react-icons/fi";
import React from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";

const ShareButton: React.FC = () => {
  return (
    <HoverBorderGradient className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white ">
      <FiShare2 className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
      <span className="sr-only">share link</span>
    </HoverBorderGradient>
  );
};

export default ShareButton;
