import React from 'react';

interface StarIconProps {
  size?: number;  // Size of the icon (optional, defaults to 24px)
  fillColor?: string; // Fill color of the icon (optional, defaults to black)
}

const StarIcon: React.FC<StarIconProps> = ({ size = 18, fillColor = '#000' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z"
        stroke={fillColor}
      />
    </svg>
  );
};

export default StarIcon;
