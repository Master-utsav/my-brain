import React from 'react';

interface FavoriteIconProps {
  fillColor?: string;
  size?: number;
  strokeColor?: string
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ fillColor = "#000", size = 24 , strokeColor="rgb(248 113 113)"}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
    >
      <path
        d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
        stroke={strokeColor} // The stroke color can be customized via props
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor} 
      />
    </svg>
  );
};

export default FavoriteIcon;
