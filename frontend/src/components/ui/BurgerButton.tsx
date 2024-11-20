import { HoverBorderGradient } from "./HoverBorderGradient";
import { FiMoreVertical } from "react-icons/fi";

const BurgerButton = ({onClickBtn } : {onClickBtn: () => void}) => {  
  return (
    <HoverBorderGradient isAnimation={false} onClick={onClickBtn} className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white ">
      <FiMoreVertical className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-violet-500 " />
      <span className="sr-only">menu bar</span>
    </HoverBorderGradient>
  );
};

export default BurgerButton;
