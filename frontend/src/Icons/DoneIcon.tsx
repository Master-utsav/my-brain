import React from 'react';

interface DoneIconProps {
  fillColor?: string;
  size?: number;
  strokeColor?: string;
}

const DoneIcon: React.FC<DoneIconProps> = ({
  fillColor = "#000000", // Default fill color
  size = 24,             // Default size (24px)
  strokeColor = "none",
}) => {
  return (
    <svg
      fill={fillColor}
      stroke={strokeColor}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>checkmark</title>
      <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM23.258 12.307l-9.486 9.485c-0.238 0.237-0.623 0.237-0.861 0l-0.191-0.191-0.001 0.001-5.219-5.256c-0.238-0.238-0.238-0.624 0-0.862l1.294-1.293c0.238-0.238 0.624-0.238 0.862 0l3.689 3.716 7.756-7.756c0.238-0.238 0.624-0.238 0.862 0l1.294 1.294c0.239 0.237 0.239 0.623 0.001 0.862z"  stroke={strokeColor}/>
    </svg>
  );
};

export default DoneIcon;
