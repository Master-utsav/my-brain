import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col relative">
        <HeroSection/>
      <div className="w-full flex justify-center items-center sm:py-0 py-12 transition-colors duration-300  bg-dot-[#2a7ea9]/[0.5] dark:bg-dot-[#2a7ea9]/[0.4]">
        <FooterSection />
      </div>
    </div>
  );
};

export default LandingPage;
