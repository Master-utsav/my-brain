import React from 'react';

interface SmileIconProps {
  fillColor?: string;
  size?: number;
}

const SmileIcon: React.FC<SmileIconProps> = ({
  fillColor = '#000000',
  size = 24,
}) => {
  return (
    <svg
      fill={fillColor}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.5 10c.277 0 .5.223.5.5v3c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-3c0-.277.223-.5.5-.5zm-9 0c.277 0 .5.223.5.5v3c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-3c0-.277.223-.5.5-.5zm-1 10c-.507 0-.653.614-.315.888C10.803 22.243 12.89 23 15 23c2.11 0 4.203-.758 5.82-2.112.484-.404-.15-1.18-.64-.767-1.434 1.2-3.307 1.88-5.176 1.88-1.87 0-3.744-.68-5.176-1.88-.09-.076-.21-.12-.328-.12zM15 0C6.722 0 0 6.722 0 15c0 8.278 6.722 15 15 15 8.278 0 15-6.722 15-15 0-8.278-6.722-15-15-15zm0 1c7.738 0 14 6.262 14 14s-6.262 14-14 14S1 22.738 1 15 7.262 1 15 1z" />
    </svg>
  );
};

export default SmileIcon;
