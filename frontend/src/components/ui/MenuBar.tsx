
import React from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface MenuBarProps {
  isOpen: boolean;
  className?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({isOpen , className}) => {
  const tl = gsap.timeline();

  React.useEffect(() => {
    if (isOpen) {
      tl.to("#path1", {
        rotation: -45,
        translateX: 55,
        translateY: 55,
        transformOrigin: "left center",
        duration: 0.3,
      })
        .to("#svg-box", {
          duration: 0.5,
          translateY: 4,
          translateX: -2,
        })
        .to("#path2", {
          rotation: 45,
          transformOrigin: "right center",
          duration: 0.3,
        });
    } else {
      tl.to("#path1", {
        rotation: 0,
        transformOrigin: "left center",
        translateX: 0,
        translateY: 0,
        duration: 0.3,
      })
        .to("#svg-box", {
          duration: 0.5,
          translateY: 0,
          translateX: 0,
        })
        .to("#path2", {
          rotation: 0,
          transformOrigin: "right center",
          duration: 0.3,
        });
    }
  }, [isOpen, tl]);

  return (
    <svg
      width="190"
      height="70"
      viewBox="0 0 190 70"
      fill="none"
      id="svg-box"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("invert dark:invert-0 menu-bar-wave-animation space-y-2" , className)}
    >
      {/* Upper Stroke with dynamically stretched wave path */}
      <path
        id="path1"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
        d="M0 6.5625C0 4.82202 0.938333 3.15282 2.60858 1.92211C4.27882 0.691404 6.54417 0 8.90625 0H181.094C183.456 0 185.721 0.691404 187.391 1.92211C189.062 3.15282 190 4.82202 190 6.5625C190 8.30298 189.062 9.97218 187.391 11.2029C185.721 12.4336 183.456 13.125 181.094 13.125H8.90625C6.54417 13.125 4.27882 12.4336 2.60858 11.2029C0.938333 9.97218 0 8.30298 0 6.5625Z"
      />

      {/* Lower Stroke remains static */}
      <path
        id="path2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 63.4375C0 61.697 0.938333 60.0278 2.60858 58.7971C4.27882 57.5664 6.54417 56.875 8.90625 56.875H181.094C183.456 56.875 185.721 57.5664 187.391 58.7971C189.062 60.0278 190 61.697 190 63.4375C190 65.1779 189.062 66.8472 187.391 68.0779C185.721 69.3086 183.456 70 181.094 70H8.90625C6.54417 70 4.27882 69.3086 2.60858 68.0779C0.938333 66.8472 0 65.1779 0 63.4375Z"
        fill="white"
      />
    </svg>
  );
};

export default MenuBar;
