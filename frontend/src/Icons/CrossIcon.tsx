import React from 'react';

interface CrossIconProps {
  fillColor?: string;
  size?: number;
}

const CrossIcon: React.FC<CrossIconProps> = ({ fillColor = '#000', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossIcon;
