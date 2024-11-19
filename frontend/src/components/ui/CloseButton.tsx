import { HoverBorderGradient } from "./HoverBorderGradient";
import { CgClose } from "react-icons/cg";

const CloseButton = ({onClickBtn} : {onClickBtn?: () => void}) => {
  return (
    <HoverBorderGradient onClick={onClickBtn} className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white ">
      <CgClose  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-red-500 " />
      <span className="sr-only">close link</span>
    </HoverBorderGradient>
  );
};

export default CloseButton;
