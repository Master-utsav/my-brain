import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { CgClose } from "react-icons/cg";

const CloseButton = ({onClickBtn , className , containerClassName , isAnimation=true} : {onClickBtn?: () => void , className?:string , containerClassName?: string , isAnimation?: boolean}) => {
  return (
    <HoverBorderGradient isAnimation={isAnimation} onClick={onClickBtn} className={cn("p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white group", containerClassName)}>
      <CgClose  className={cn("h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-hover:text-red-500" , className)} />
      <span className="sr-only">close link</span>
    </HoverBorderGradient>
  );
};

export default CloseButton;
