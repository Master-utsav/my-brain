import { cn } from "@/lib/utils";
import React from "react";
import Logo from "../Logo";
import { useTheme } from "@/context/ThemeProvider";
import MasterBrainSvg from "../ui/MasterBrainSvg";
import { ModeToggle } from "../ui/ThemeBtn";
import { DashBoardNavItems } from "@/constants";
import UserBoardNavitems from "./UserBoardNavitems";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { motion } from "framer-motion";
import ShareButton from "../ui/ShareButton";
import ContactButton from "../ui/ContactButton";
import HomeButton from "../ui/HomeButton";

interface SideBarProps {
  className: string;
  isSideBarOpen: boolean;
  OnSideBarOpen: (val : boolean) => void; 
}

const Sidebar: React.FC<SideBarProps> = ({ className, isSideBarOpen , OnSideBarOpen}) => {
  const location = useLocation();
  const { theme } = useTheme();
  const locName = location.pathname.split("/")[2];
  const navigate = useNavigate();

  return (
    <motion.aside
      initial={{x: -56}}
      animate={{x: 0}}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className={cn(
        `h-screen dark:bg-black-200 bg-white-800 z-50 flex justify-between flex-col items-center overflow-hidden`,
        className
      )}
    >
      <div
        className={`flex ${
          isSideBarOpen ? "flex-row" : "flex-col"
        } items-center sm:justify-start justify-around gap-2 relative w-full py-5 sm:px-2`}
      >
        <Link
          to="/user/edit-profile"
          className="aspect-square size-12 flex justify-center items-center gap-2"
        >
          <Image
            isBlurred
            src="/avatar.png"
            alt="avatar"
            className="object-cover aspect-square size-12 rounded-full"
          />
        </Link>

        {isSideBarOpen && (
          <div className="flex overflow-hidden gap-1 font-ubuntu">
            <span className="text-lg font-medium ">Good</span>
            <span className="text-lg font-medium ">Morning</span>
          </div>
        )}

        <motion.button 
        initial={{ x: 0 }}
        animate={{ x: [-2, 2, -2] }} 
        transition={{
          repeat: Infinity,
          duration: 3,      
          ease: "easeInOut",
        }}
          onClick={() => OnSideBarOpen(!isSideBarOpen)}
         className=" p-0 justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white">
          {isSideBarOpen ? <GoSidebarExpand className="text-black dark:text-white size-8"/> : <GoSidebarCollapse className="text-black dark:text-white size-8"/> }
        </motion.button>

      </div>
      <div className="w-full relative overflow-hidden">
        <nav
          className={`space-y-0 flex flex-col justify-center items-center`}
        >
          {DashBoardNavItems.map((item, index) => (
            <UserBoardNavitems
              key={index}
              index={index}
              Icon={item.Icon}
              title={item.title}
              link={item.link}
              isActive={item.link.split("/")[2] === locName}
              isSideBarOpen={isSideBarOpen}
            />
          ))}
        </nav>
      </div>
      <div
        className={`flex ${
          isSideBarOpen ? "flex-row py-5" : "flex-col py-2"
        } items-center justify-center gap-2 relative w-full `}
      >
        <HomeButton onClickBtn={() => navigate("/")}/>
        <ContactButton onClickBtn={() => navigate("/contact")} />
        <ModeToggle />
        <ShareButton />
      </div>
      <div className={`w-full ${isSideBarOpen ? "h-[12%]" : ""} rounded-lg relative p-2 overflow-hidden flex justify-start flex-col items-center`}>
        <Logo className="w-12" theme={theme} />
        {isSideBarOpen && (
          <MasterBrainSvg className="absolute top-2 scale-[0.35]" />
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
