import React from 'react';
import { Button } from '@mui/material';
import { FormActions as StyledFormActions } from '../styled';
import { LoadingIcon, RefreshIcon } from '../../icons';

interface FormActionsProps {
  isLoading: boolean;
  isValid: boolean;
  showTryAgain?: boolean;
}

const FormActions: React.FC<FormActionsProps> = ({
  isLoading,
  isValid,
  showTryAgain = false,
}) => {
  return (
    <StyledFormActions direction="row">
      {showTryAgain ? (
        <Button
          disabled={isLoading || !isValid}
          variant="outlined"
          color="primary"
          size="large"
          type="submit"
          startIcon={<RefreshIcon />}
          aria-label="Try Again"
        >
          Try Again
        </Button>
      ) : (
        <Button
          size="large"
          type="submit"
          disabled={isLoading || !isValid}
          variant="contained"
          aria-busy={isLoading}
        >
          {isLoading ? <LoadingIcon /> : 'Generate Now'}
        </Button>
      )}
    </StyledFormActions>
  );
};

export default FormActions;
