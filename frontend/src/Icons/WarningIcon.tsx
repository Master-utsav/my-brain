import React from "react";

interface WarningIconProps {
  fillColor?: string; // Optional fill color for the icon
  size?: number; // Optional size for the icon
}

const WarningIcon: React.FC<WarningIconProps> = ({ fillColor = "#000000", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z" 
        stroke={fillColor} // Use fillColor prop
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WarningIcon;
