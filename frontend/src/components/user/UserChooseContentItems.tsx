import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";

interface IconProps {
  className?: string;
}

interface UserChooseContentItemsProps {
  index: number;
  Icon: React.ComponentType<IconProps>;
  title: string;
  link: string;
  iconClassName?: string;
  onClickBtn?: () => void;
}

const UserChooseContentItems: React.FC<UserChooseContentItemsProps> = ({
  index,
  Icon,
  title,
  iconClassName,
  link,
  onClickBtn,
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
      className={`relative overflow-hidden  group flex items-center justify-center`}
    >
      <Link to={link} onClick={onClickBtn}>
        <HoverBorderGradient
          isAnimation={false}
          containerClassName={`rounded-2xl`}
          className={`font-ubuntu dark:bg-black bg-white-800 text-black py-1 dark:text-white`}
        >
          <div className="flex items-center space-x-2 relative overflow-hidden p-1">
            <span
              className={`transition-all ease-in-out duration-300 cursor-pointer`}
            >
              <Icon
                className={cn(
                  "text-black dark:text-white size-5",
                  iconClassName
                )}
              />
            </span>
            <span className="text-base font-ubuntu text-center dark:text-white text-black group-hover:text-black/80 group-hover:dark:text-white/80 font-medium">
              {title}
            </span>
          </div>
        </HoverBorderGradient>
      </Link>
    </motion.div>
  );
};

export default React.memo(UserChooseContentItems);
