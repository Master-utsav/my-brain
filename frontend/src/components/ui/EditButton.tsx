import { HoverBorderGradient } from "./HoverBorderGradient";
import { CiEdit } from "react-icons/ci";

const EditButton = ({ onClickBtn }: { onClickBtn?: () => void }) => {
  return (
    <HoverBorderGradient
      onClick={onClickBtn}
      isAnimation={false}
      className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white "
    >
      <CiEdit className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-emerald-500" />
      <span className="sr-only">Edit card</span>
    </HoverBorderGradient>
  );
};

export default EditButton;
