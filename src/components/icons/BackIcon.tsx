import React from 'react';

interface BackIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const BackIcon: React.FC<BackIconProps> = ({ width = 20, height = 20, color = 'currentColor' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 9.16667H5.99999L10.5 4.66667L9.33332 3.5L2.83332 10L9.33332 16.5L10.5 15.3333L5.99999 10.8333H15.8333V9.16667Z"
        fill={color}
      />
    </svg>
  );
};

export default BackIcon;
