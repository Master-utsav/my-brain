import { FiHome } from "react-icons/fi";
import { HoverBorderGradient } from "./HoverBorderGradient";

const HomeButton = ({onClickBtn} : {onClickBtn?: () => void}) => { 
  return (
    <HoverBorderGradient onClick={onClickBtn} className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white ">
      <FiHome className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
      <span className="sr-only">Home page</span>
    </HoverBorderGradient>
  )
}

export default HomeButton
