import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import { useTheme } from "@/context/ThemeProvider";
import Logo from "@/components/Logo";
import { useAuthContext } from "@/context/AuthContext";
import UserButton from "./ui/DashBoardButton";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  const handleSignupClick = () => {
    navigate("/signup");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleDashBoardClick = () => {
    navigate("/user/all-content");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 md:w-[80%] w-fit sm:max-w-7xl md:rounded-md rounded-xl mx-auto bg-transparent my-2">
      <div className="max-w-full sm:py-2 relative  md::rounded-md rounded-xl">
        <div className="flex sm:flex-row md:backdrop-blur-none backdrop-blur-md  md:rounded-md rounded-xl relative flex-col justify-between px-5 items-center font-noto-sans xl:gap-20 md:gap-5 gap-3">
          <Link
            to={"/"}
            className="flex justify-start py-2 items-center font-noto-sans"
          >
            <Logo theme={theme} className="" />
          </Link>

          <div className="flex sm:gap-4 gap-2 justify-center items-center">
            {!isLoggedIn ? (
              <>
                <UserButton ButtonName="Signup" onClickBtn={handleSignupClick} />
                <UserButton ButtonName="Login" onClickBtn={handleLoginClick} />
              </>
            ) : (
              <UserButton ButtonName="Dashboard" onClickBtn={handleDashBoardClick} />
            )}

            <div className="h-full w-full justify-center items-center rounded-3xl font-semibold shadow-md transition-all ">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
