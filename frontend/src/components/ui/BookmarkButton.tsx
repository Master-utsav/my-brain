import { MdBookmark } from "react-icons/md";
import { HoverBorderGradient } from "./HoverBorderGradient";


const BookmarkButton = ({onClickBtn } : {onClickBtn?: () => void}) => {  
  return (
    <HoverBorderGradient isAnimation={false} onClick={onClickBtn} className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white ">
      <MdBookmark className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-purple-500 " />
      <span className="sr-only">menu bar</span>
    </HoverBorderGradient>
  );
};

export default BookmarkButton;
