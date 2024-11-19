import { motion } from "framer-motion";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import { FaPlus } from "react-icons/fa6";

const SectionHeader = ({
  onClickBtn,
  title,
  description,
  isSideBarOpen = false,
  isBtnShow = true,
}: {
  onClickBtn?: () => void;
  title: string;
  description: string;
  isSideBarOpen: boolean;
  isBtnShow?: boolean;
}) => {
  return (
    <nav
      className={`fixed top-0 left-0 flex lg:flex-row flex-col items-center justify-between py-1 px-2 sm:px-3 lg:px-6 dark:bg-black-200 bg-white-800 border-b border-gray-300 mx-auto dark:border-gray-700 z-20 backdrop-blur-xl ${
        isSideBarOpen
          ? "sm:ml-[15rem] min-w-[calc(100%-15rem)]"
          : "ml-[5rem] min-w-[calc(100%-5rem)]"
      }`}
    >
      <motion.h1
      key={title}
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        exit={{ x: -50 , opacity : 0}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-4xl text-3xl text-center text-transparent bg-clip-text font-medium font-
        font-kalnia bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-500"
      >
        {title}
      </motion.h1>
      <p className="text-base font-noto-sans xl:line-clamp-none line-clamp-1 text-gray-500 dark:text-gray-400 xl:max-w-2xl max-w-md text-center">
        {description.split(" ").map((val, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0}}
            transition={{ delay: 0.06 * idx }}
            className="inline-block"
          >
            {val}&nbsp;
          </motion.span>
        ))}
      </p>

      {isBtnShow && (
        <HoverBorderGradient
          onClick={onClickBtn}
          className="flex justify-center items-center gap-2 p-3 font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
        >
          <FaPlus className="size-5 text-black dark:text-white" /> Add Content
        </HoverBorderGradient>
      )}
    </nav>
  );
};

export default SectionHeader;
