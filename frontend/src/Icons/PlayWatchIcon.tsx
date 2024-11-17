import React from 'react';

interface PlayWatchIconProps {
  fillColor?: string;
  size?: number;
}

const PlayWatchIcon: React.FC<PlayWatchIconProps> = ({
  fillColor = "#000", // Default to black if not provided
  size = 24, // Default size
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 -3 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        transform="translate(-420.000000, -3842.000000)"
        fill={fillColor}
      >
        <g transform="translate(56.000000, 160.000000)">
          <path d="M382,3690.371 L379.774,3688.98 L382,3687.588 L382,3690.371 Z M366,3694 L376,3694 L376,3684 L366,3684 L366,3694 Z M378,3687.808 L378,3682 L364,3682 L364,3696 L378,3696 L378,3690.151 L384,3693.98 L384,3683.98 L378,3687.808 Z" />
        </g>
      </g>
    </g>
  </svg>
);

export default PlayWatchIcon;
