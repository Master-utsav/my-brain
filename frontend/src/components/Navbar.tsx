import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import { useTheme } from "@/context/ThemeProvider";
import Logo from "@/components/Logo";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-[80%] sm:max-w-7xl mx-auto bg-transparent my-2">
      <div className="max-w-full sm:py-2 relative">
        <div className="flex sm:flex-row relative flex-col justify-between px-5 items-center font-noto-sans xl:gap-20 md:gap-5 gap-3">
          <Link
            to={"/"}
            className="flex justify-start py-2 items-center font-noto-sans"
          >
            <Logo theme={theme} className="" />
          </Link>
  
          <div className="flex sm:gap-4 gap-2 justify-center items-center">
            <HoverBorderGradient
              className="w-full py-2 px-6 font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
              onClick={handleSignupClick}
            >
              Signup
            </HoverBorderGradient>
            <HoverBorderGradient
              className="w-full py-2 px-6 font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
              onClick={handleLoginClick}
            >
              Login
            </HoverBorderGradient>

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
