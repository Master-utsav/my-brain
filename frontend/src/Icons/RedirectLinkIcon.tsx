import React from "react";

interface RedirectLinkIconProps {
  fillColor?: string;
  size?: number;
}

const RedirectLinkIcon: React.FC<RedirectLinkIconProps> = ({
  fillColor = "#1F2328", // Default fill color
  size = 24, // Default size
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 7.375C7.5 6.33947 8.33947 5.5 9.375 5.5C10.4105 5.5 11.25 6.33947 11.25 7.375V16.625C11.25 18.489 12.761 20 14.625 20C16.489 20 18 18.489 18 16.625V11.8107L19.2197 13.0303L20.2803 11.9697L17.25 8.93934L14.2197 11.9697L15.2803 13.0303L16.5 11.8107V16.625C16.5 17.6605 15.6605 18.5 14.625 18.5C13.5895 18.5 12.75 17.6605 12.75 16.625V7.375C12.75 5.51104 11.239 4 9.375 4C7.51104 4 6 5.51104 6 7.375V9.5H4V15H9.5V9.5H7.5V7.375ZM5.5 11V13.5H8V11H5.5Z"
      fill={fillColor}
    />
  </svg>
);

export default RedirectLinkIcon;
