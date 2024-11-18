import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react"; // Optional: You can replace it with your custom tooltip if needed
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";

interface IconProps {
    className? : string;
}

interface UserBoardNavitemsProps {
  index: number;
  theme: string;
  Icon: React.ComponentType<IconProps>;
  title: string;
  link: string;
  isSideBarOpen: boolean;
  isActive:boolean;
  iconClassName?: string;
}

const UserBoardNavitems: React.FC<UserBoardNavitemsProps> = ({
  index,
  theme,
  Icon,
  title,
  iconClassName,
  link,
  isActive,
  isSideBarOpen,
}) => {

    console.log(isSideBarOpen);
    
  return (
    <motion.div
      key={index}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [50, 0], opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className={`relative overflow-hidden w-full group flex items-center justify-center ${isSideBarOpen ? "px-4 py-2" : "px-2 py-1"}`}
    >
    <HoverBorderGradient isActive={isActive} isAnimation={false} containerClassName="w-full rounded-2xl" className={`w-full font-ubuntu dark:bg-black bg-white-800  text-black dark:text-white ${isActive ? "dark:bg-black-300 bg-white" : ""}`}>
    <Link
        to={link}
        className={`flex items-center space-x-2 relative overflow-hidden w-full p-1 ${isSideBarOpen ? "" : "justify-center"}`}
        >
        {!isSideBarOpen &&   
        <Tooltip 
          showArrow
          placement="right"
          content={title}
          classNames={{
            base: [
              // arrow color
              "before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500",
            ],
            content: [
              "py-2 px-4 shadow-xl ",
              "text-purple-700 bg-gradient-to-br from-white to-neutral-400 font-ubuntu font-medium ",
            ],
          }}
        >
          <span className={`transition-all ease-in-out duration-300 cursor-pointer px-4 ${isActive ? "opacity-100" : "opacity-70"}`}>
            {theme === "dark" ? (
              <Icon className={cn("text-black dark:text-white size-6" , iconClassName)} />
            ) : (
              <Icon className={cn("text-black dark:text-white size-6" , iconClassName)} />
            )}
          </span>
         </Tooltip>
}
        {isSideBarOpen ? (
          <>
          <span className={`transition-all ease-in-out duration-300 cursor-pointer ${isActive ? "opacity-100" : "opacity-70"}`}>
            {theme === "dark" ? (
             <Icon className={cn("text-black dark:text-white size-6" , iconClassName)} />
            ) : (
              <Icon className={cn("text-black dark:text-white size-6" , iconClassName)} />
            )}
          </span>
          <span
            className="text-base font-ubuntu text-center 
              dark:text-white text-black group-hover:text-black/80 
              group-hover:dark:text-white/80 font-medium"
          >
            {title}
          </span>
          </>
        ) : (
          <></>
        )}
      </Link>
      </HoverBorderGradient>
    </motion.div>
  );
};

export default React.memo(UserBoardNavitems);