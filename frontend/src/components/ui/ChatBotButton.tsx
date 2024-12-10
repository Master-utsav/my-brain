import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { AiOutlineWechatWork } from "react-icons/ai";

const ChatBotButton = ({
  onClickBtn,
  className,
  containerClassName,
  isAnimation = true,
}: {
  onClickBtn?: () => void;
  className?: string;
  containerClassName?: string;
  isAnimation?: boolean;
}) => {
  return (
    <HoverBorderGradient
      isAnimation={isAnimation}
      onClick={onClickBtn}
      className={cn(
        "p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white size-16 group",
        containerClassName
      )}
    >
      <AiOutlineWechatWork
        className={cn(
          "size-10 rotate-0 scale-100 transition-all group-hover:text-blue-500",
          className
        )}
      />
      <span className="sr-only">chat bot</span>
    </HoverBorderGradient>
  );
};

export default ChatBotButton;
