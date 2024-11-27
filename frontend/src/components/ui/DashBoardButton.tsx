import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "./HoverBorderGradient";

const UserButton = ({
  onClickBtn,
  ButtonName,
  className,
  isAnimation = true,
}: {
  onClickBtn?: () => void;
  ButtonName: string;
  className?: string;
  isAnimation?: boolean;
}) => {
  return (
    <HoverBorderGradient
      className={cn(
        "w-full py-2 px-6 font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white",
        className
      )}
      onClick={onClickBtn}
      isAnimation={isAnimation}
    >
      {ButtonName}
    </HoverBorderGradient>
  );
};

export default UserButton;
