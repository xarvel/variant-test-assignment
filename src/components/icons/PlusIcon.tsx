import React from 'react';

interface PlusIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ width = 20, height = 20, color = 'white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 10.8333H10.8333V15.8333H9.16667V10.8333H4.16667V9.16667H9.16667V4.16667H10.8333V9.16667H15.8333V10.8333Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;
