import React from 'react';

interface AddIconProps {
    fillColor?: string;
    size?: number;
  }

const AddIcon: React.FC<AddIconProps> = ({ fillColor = "#0e0e10", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={"none"}
    >
      <circle cx="12" cy="12" r="10" stroke={fillColor} strokeWidth="1.5" />
      <path
        d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AddIcon;
