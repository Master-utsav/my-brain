import { HoverBorderGradient } from "./HoverBorderGradient";
import { Image } from "@nextui-org/react";

const PersonalPicButton = ({onClickBtn} : {onClickBtn?: () => void}) => { 
  return (
    <HoverBorderGradient onClick={onClickBtn} isAnimation={false} className="p-0 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white group cursor-pointer" containerClassName="p-0">
      <Image src="/images/my_picture_logo.jpg" className="size-6 rotate-0 scale-100 transition-all" isBlurred />
      <span className="sr-only">My pic</span>
    </HoverBorderGradient>
  )
}

export default PersonalPicButton
