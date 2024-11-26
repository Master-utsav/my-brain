import { HoverBorderGradient } from "./HoverBorderGradient";

const UserButton = ({ onClickBtn , ButtonName}: { onClickBtn?: () => void , ButtonName: string}) => {
  return (
    <HoverBorderGradient
      className="w-full py-2 px-6 font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
      onClick={onClickBtn}
    >
      {ButtonName}
    </HoverBorderGradient>
  );
};

export default UserButton;
