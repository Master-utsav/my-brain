import { IoMdHelpCircleOutline } from "react-icons/io";
import { HoverBorderGradient } from "./HoverBorderGradient";

const ContactButton = ({onClickBtn} : {onClickBtn?: () => void}) => {
  return (
    <HoverBorderGradient onClick={onClickBtn} className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white ">
      <IoMdHelpCircleOutline className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-amber-500" />
      <span className="sr-only">contact</span>
    </HoverBorderGradient>
  );
};

export default ContactButton;
