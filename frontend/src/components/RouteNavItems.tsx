import React, { useEffect, useState } from "react";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { NavItems } from "@/constants";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";

const RouteNavItems: React.FC = () => {
  const location = useLocation();
  const [currentLoc , setCurrentLoc] = useState<string>("/")

  useEffect(() => {
     if(location.pathname !== currentLoc){
        setCurrentLoc(location.pathname)
     }
  }, [location.pathname])

  return (
    <div className="max-w-lg mx-auto flex justify-center items-center">
    <HoverBorderGradient
      containerClassName="w-full px-1 py-0"
      isAnimation={false}
      className="w-full flex md:flex-col flex-row font-ubuntu md:py-3 md:px-1 px-4 py-2 space-x-5 md:space-x-0 space-y-0 md:space-y-5 dark:bg-black bg-white-800 text-black dark:text-white"
    >
        {NavItems.map((item , idx) => (
            <div key={idx} className="w-full flex justify-center items-center ">
                <Link to={item.path} >
                <Tooltip
                showArrow
                placement="right"
                content={item.name}
                classNames={{
                  base: [
                    "before:bg-gradient-to-r before:from-gray-800 before:via-gray-600 before:to-gray-500 md:block hidden", 
                  ],
                  content: [
                    "py-2 px-4 shadow-xl",
                    "text-gray-300 bg-gradient-to-br from-gray-900 to-gray-700 font-ubuntu font-medium md:block hidden",
                  ],
                }}
                
              >
                <span
                  className={`transition-all ease-in-out duration-300 cursor-pointer py-1  ${
                    item.path === currentLoc ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <item.icon
                    className={"text-black dark:text-white size-6"}
                  />
                </span>
              </Tooltip>
                </Link>
            </div>
        ))}
    </HoverBorderGradient>
    </div>
  );
};

export default RouteNavItems;
