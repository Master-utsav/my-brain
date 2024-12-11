import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { IoSend } from "react-icons/io5";

const SendButton = ({onClickBtn , className , containerClassName , isAnimation=true, isDisabled=false} : {onClickBtn?: () => void , className?:string , containerClassName?: string , isAnimation?: boolean , isDisabled: boolean}) => {
  return (
    <HoverBorderGradient aria-disabled={isDisabled} isAnimation={!isDisabled && isAnimation} onClick={onClickBtn} className={cn("p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white group", containerClassName)}>
      <IoSend  className={cn(`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-hover:text-blue-500 ${isDisabled ? "dark:text-white-600 text-black-500" : "dark:text-white text-black"}` , className)} />
      <span className="sr-only">send Button</span>
    </HoverBorderGradient>
  );
};

export default SendButton;
