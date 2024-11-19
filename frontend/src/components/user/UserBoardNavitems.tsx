import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react"; // Optional: You can replace it with your custom tooltip if needed
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";

interface IconProps {
  className?: string;
}

interface UserBoardNavitemsProps {
  index: number;
  Icon: React.ComponentType<IconProps>;
  title: string;
  link: string;
  isSideBarOpen: boolean;
  isActive: boolean;
  iconClassName?: string;
}

const UserBoardNavitems: React.FC<UserBoardNavitemsProps> = ({
  index,
  Icon,
  title,
  iconClassName,
  link,
  isActive,
  isSideBarOpen,
}) => {
  return (
    <motion.div
      key={index}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [50, 0], opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className={`relative overflow-hidden w-full group flex items-center justify-center py-1 ${
        isSideBarOpen ? "px-4" : "px-1"
      }`}
    >
      <Link
        to={link}
        className={`w-full`}
      >
        <HoverBorderGradient
          isActive={isActive}
          isAnimation={false}
          containerClassName={`w-full ${
            isSideBarOpen ? "rounded-2xl" : "rounded-full"
          }`}
          className={`w-full font-ubuntu dark:bg-black bg-white-800 text-black py-1 dark:text-white ${
            (isActive && isSideBarOpen) ? "dark:bg-black-300 bg-white px-2" : (isActive && !isSideBarOpen) ? "dark:bg-black-300 bg-white"
          : ""}`}
        >
          <div className="flex items-center space-x-2 relative overflow-hidden w-full p-1">
            {!isSideBarOpen && (
              <Tooltip
                showArrow
                placement="right"
                content={title}
                classNames={{
                  base: [
                    "before:bg-gradient-to-r before:from-gray-800 before:via-gray-600 before:to-gray-500", 
                  ],
                  content: [
                    "py-2 px-4 shadow-xl",
                    "text-gray-300 bg-gradient-to-br from-gray-900 to-gray-700 font-ubuntu font-medium",
                  ],
                }}
                
              >
                <span
                  className={`transition-all ease-in-out duration-300 cursor-pointer px-1 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <Icon
                    className={cn("text-black dark:text-white size-5", iconClassName)}
                  />
                </span>
              </Tooltip>
            )}

            {isSideBarOpen && (
              <>
                <span
                  className={`transition-all ease-in-out duration-300 cursor-pointer ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <Icon
                    className={cn("text-black dark:text-white size-5", iconClassName)}
                  />
                </span>
                <span
                  className="text-base font-ubuntu text-center dark:text-white text-black group-hover:text-black/80 group-hover:dark:text-white/80 font-medium"
                >
                  {title}
                </span>
              </>
            )}
          </div>
        </HoverBorderGradient>
      </Link>
    </motion.div>
  );
};

export default React.memo(UserBoardNavitems);
