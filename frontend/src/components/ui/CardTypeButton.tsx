import { HoverBorderGradient } from "./HoverBorderGradient";

const CardTypeButton = ({
  onClickBtn,
  Icon,
}: {
  onClickBtn?: () => void;
  Icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <HoverBorderGradient
      onClick={onClickBtn}
      isAnimation={false}
      className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white "
    >
      <Icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      <span className="sr-only">Card type</span>
    </HoverBorderGradient>
  );
};

export default CardTypeButton;
