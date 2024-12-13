import { HeroSectionData } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import UserButton from "./ui/DashBoardButton";
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexOfImage, setCurrentIndexOfImage] = useState(0);
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % HeroSectionData.descripion.length
      );
      setCurrentIndexOfImage(
        (prevIndex) => (prevIndex + 1) % HeroSectionData.imgUrl.length
      );
    }, 4000); 

    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <section className="flex w-full relative flex-col items-center justify-center min-h-screen md:min-h-[160vh] transition-colors duration-300 mx-auto bg-dot-[#2a7ea9]/[0.5] dark:bg-dot-[#2a7ea9]/[0.4] sm:py-16 pt-40 ">
      <h1 className="text-4xl md:text-6xl max-w-xl text-center mt-5 font-kalnia">
        <span className="text-[#2a7ea9] font-bold font-noto-sans">
          {HeroSectionData.title[0]}
        </span>
        {HeroSectionData.title[1]}
      </h1>
      <h1 className="text-4xl md:text-6xl max-w-xl text-center mb-5 font-kalnia">
        <span className="text-[#2a7ea9] font-bold font-noto-sans">
          {HeroSectionData.title[2]}
        </span>
        {HeroSectionData.title[3]}
        </h1>
      <div className="text-center max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg text-black-200 dark:text-white-800"
          >
            {HeroSectionData.descripion[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="mt-4">
        {isLoggedIn ? (
          <UserButton
            ButtonName={"Dashboard"}
            onClickBtn={() => navigate("/user/all-content")}
          />
        ) : (
          <UserButton
            ButtonName={HeroSectionData.cta}
            onClickBtn={() => navigate("/login")}
            className="text-lg "
          />
        )}
      </div>

      <div className="flex justify-center items-start w-full h-screen md:py-20 py-10 relative px-4">
        <div className="flex flex-col items-center md:w-[75%] w-full z-10 border-[1px] md:p-5 p-1 dark:bg-black/20 bg-white/20 dark:bg-grid-white/[0.1] bg-grid-black/[0.1] rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
            key={currentIndexOfImage}
            initial={{filter: "blur(20px)" , x: 500}}
            animate={{filter: "blur(0px)" , x: 0}}
            exit={{filter: "blur(20px)" , x: -1000}}
            transition={{ease: "easeOut" , duration: 0.8}}
            >
              <Image
                key={currentIndexOfImage}
                src={HeroSectionData.imgUrl[currentIndexOfImage]}
                alt="Dashboard"
                className="rounded-lg shadow-2xl object-cover"
                isBlurred
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
