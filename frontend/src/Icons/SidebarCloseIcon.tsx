import React from "react";

interface SidebarCloseIconProps {
  size?: number; // Size of the icon, default is 24
  fillColor?: string; // Fill color for the icon, default is "#292D32"
}

const SidebarCloseIcon: React.FC<SidebarCloseIconProps> = ({
  size = 24,
  fillColor = "#292D32",
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
        d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.96997 2V22"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.97 9.43994L12.41 11.9999L14.97 14.5599"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SidebarCloseIcon;
