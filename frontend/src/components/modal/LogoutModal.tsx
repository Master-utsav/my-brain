import { userLogout } from "@/lib/getLocalStorage";
import { useNavigate } from "react-router-dom";
import WarningIcon from "@/Icons/WarningIcon";
// import { SuccessToast } from "@/lib/toasts";
import { useAuthContext } from "@/context/AuthContext";
import UserButton from "../ui/DashBoardButton";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";

const LogoutModal = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthContext();

  const handleConfirmLogout = () => {
    userLogout();
    setIsLoggedIn(false);
    navigate("/");
    // SuccessToast("Logout Successful");
  };

  const handleCancelLogout = () => {
    navigate("/");
  };

  //   const modalVariants = {
  //     hidden: { opacity: 0.3, scale: 0.8 },
  //     visible: { opacity: 1, scale: 1 },
  //     exit: { opacity: 0, scale: 0.8 }
  //   };

  return (
    <section className="w-full h-screen fixed inset-0 flex items-center justify-center bg-white dark:bg-black  backdrop-blur-lg transition-opacity duration-300">
      <HoverBorderGradient
        containerClassName="rounded-lg mb-1"
        className="w-full flex p-4 font-ubuntu justify-center flex-col items-center text-black dark:text-white bg-white dark:bg-black"
        //   variants={modalVariants}
        //   initial="hidden"
        //   animate="visible"
        //   exit="exit"
        //   transition={{ duration: 0.3 }}
      >
        <div className="flex items-center mb-4">
          <WarningIcon fillColor="rgb(202 138 4)" />
          <h2 className="text-lg font-bold">Warning</h2>
        </div>
        <p className="text-gray-700 mb-4 font-ubuntu dark:text-white-600 ">
          Are you sure you want to logout?
        </p>
        <div className="flex gap-4 mt-4 justify-between">
          <UserButton
            onClickBtn={handleCancelLogout}
            ButtonName="cancel"
            isAnimation={false}
          />
          <UserButton
            onClickBtn={handleConfirmLogout}
            ButtonName="confirm"
            isAnimation={false}
            className="text-red-500 dark:text-red-400"
          />
        </div>
      </HoverBorderGradient>
    </section>
  );
};

export default LogoutModal;
