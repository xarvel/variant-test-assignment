import React from 'react';

interface CheckIconProps {
  width?: number;
  height?: number;
}

const CheckIcon: React.FC<CheckIconProps> = ({ width = 44, height = 44 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="14" fill="#D1FADF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9458 8.62169L11.5925 16.6834L9.37583 14.315C8.9675 13.93 8.32583 13.9067 7.85916 14.2334C7.40416 14.5717 7.27583 15.1667 7.55583 15.645L10.1808 19.915C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.915C12.9925 19.3667 21.0075 9.81169 21.0075 9.81169C22.0575 8.73836 20.7858 7.79336 19.9458 8.61002V8.62169Z"
        fill="#12B76A"
      />
    </svg>
  );
};

export default CheckIcon;
