import React from 'react';

interface NavbarIconProps {
  fillColor?: string;
  size?: number;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ fillColor = '#000000', size = 24 }) => {
  return (
    <svg
      fill={fillColor}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>bars</title>
      <path d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
    </svg>
  );
};

export default NavbarIcon;
