import { IoMdExpand } from "react-icons/io";
import { HoverBorderGradient } from "./HoverBorderGradient";


const ExpandButton = ({onClickBtn } : {onClickBtn?: () => void}) => {  
  return (
    <HoverBorderGradient isAnimation={false} onClick={onClickBtn} className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white ">
      <IoMdExpand className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-gray-500 " />
      <span className="sr-only">full view</span>
    </HoverBorderGradient>
  );
};

export default ExpandButton;
