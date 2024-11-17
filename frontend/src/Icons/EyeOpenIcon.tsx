import React from "react";

interface EyeOpenIconProps {
  fillColor?: string;
  size?: number;
}

const EyeOpenIcon: React.FC<EyeOpenIconProps> = ({
  fillColor = "#000000", // Default color black
  size = 24,             // Default size 24
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z"
        stroke={fillColor}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeOpenIcon;
