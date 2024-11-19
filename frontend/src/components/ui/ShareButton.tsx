import { FiShare2 } from "react-icons/fi";
import { HoverBorderGradient } from "./HoverBorderGradient";

const ShareButton = ({onClickBtn , isAnimation = true} : {onClickBtn?: () => void , isAnimation?: boolean}) => {
  return (
    <HoverBorderGradient isAnimation={isAnimation} onClick={onClickBtn} className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white">
      <FiShare2 className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  hover:text-green-500" />
      <span className="sr-only">share link</span>
    </HoverBorderGradient>
  );
};

export default ShareButton;
