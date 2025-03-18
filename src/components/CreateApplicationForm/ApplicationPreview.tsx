import React, { useCallback, useState } from 'react';
import { Button } from '@mui/material';
import { PreviewSection, PreviewContent, PreviewActions, ResultTextTypography } from './styled';
import { CopyIcon } from '../icons';
import LoadingOverlay from '../LoadingOverlay';

export interface ApplicationPreviewProps {
  generatedText: string;
  isLoading?: boolean;
}

const getPreviewText = (): string => {
  return 'Your personalized job application will appear here...';
};

const ApplicationPreview: React.FC<ApplicationPreviewProps> = ({
  generatedText,
  isLoading = false,
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(generatedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, [generatedText, setIsCopied]);

  return (
    <PreviewSection>
      <PreviewContent>
        {isLoading ? (
          <LoadingOverlay message="Generating your application..." />
        ) : (
          <ResultTextTypography variant="body2" color="#667085">
            {generatedText ? generatedText : getPreviewText()}
          </ResultTextTypography>
        )}
      </PreviewContent>

      <PreviewActions>
        <Button
          variant="text"
          color="secondary"
          onClick={handleCopyToClipboard}
          endIcon={<CopyIcon width={20} height={20} />}
          disabled={isLoading}
        >
          {isCopied ? 'Copied!' : 'Copy to clipboard'}
        </Button>
      </PreviewActions>
    </PreviewSection>
  );
};

export default ApplicationPreview;
