import { HoverBorderGradient } from "./HoverBorderGradient";
import { MdDeleteOutline } from "react-icons/md";

const DeleteButton = ({ onClickBtn }: { onClickBtn?: () => void }) => {
  return (
    <HoverBorderGradient
      onClick={onClickBtn}
      isAnimation={false}
      className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white "
    >
      <MdDeleteOutline className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-red-500" />
      <span className="sr-only">Delete card</span>
    </HoverBorderGradient>
  );
};

export default DeleteButton;
