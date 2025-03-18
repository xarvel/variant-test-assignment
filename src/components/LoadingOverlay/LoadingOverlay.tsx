import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingContainer, LoadingTextTypography } from './styled';

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message = 'Loading...' }) => {
  return (
    <LoadingContainer>
      <CircularProgress size={40} color="primary" />
      <LoadingTextTypography variant="body2" color="text.secondary">
        {message}
      </LoadingTextTypography>
    </LoadingContainer>
  );
};

export default LoadingOverlay;
