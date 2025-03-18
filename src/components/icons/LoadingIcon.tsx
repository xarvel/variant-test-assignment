import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

interface LoadingIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AnimatedSvg = styled('svg')`
  animation: ${spin} 1s linear infinite;
`;

const LoadingIcon: React.FC<LoadingIconProps> = ({ width = 20, height = 20 }) => {
  return (
    <AnimatedSvg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </AnimatedSvg>
  );
};

export default LoadingIcon;
