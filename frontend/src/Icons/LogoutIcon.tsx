import * as React from "react";

interface LogoutIconProps {
  size?: number;
  fillColor?: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({
  size = 24,
  fillColor = "#1C274C", // Default color
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
        d="M10 12H20M20 12L17 9M20 12L17 15"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LogoutIcon;
