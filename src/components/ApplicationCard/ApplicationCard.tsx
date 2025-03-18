import React, { useState, useCallback } from 'react';
import { DeleteIcon, CopyIcon } from '../icons';
import { useApplicationStore, Application } from '../../store/applicationStore';
import { CardContainer, ButtonContainer, CardTextTypography, ActionButton } from './styled';
import { useNavigate } from 'react-router-dom';

export interface ApplicationCardProps {
  application: Application;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ application }) => {
  const deleteApplication = useApplicationStore(state => state.deleteApplication);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCopy = useCallback((e: React.MouseEvent): void => {
    e.stopPropagation();
    navigator.clipboard.writeText(application.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, [application.text, setIsCopied]);

  const handleDelete = useCallback((e: React.MouseEvent): void => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this application?')) {
      deleteApplication(application.id);
    }
  }, [deleteApplication, application.id]);

  const handleCardClick = useCallback(() => {
    navigate(`/edit/${application.id}`);
  }, [application.id, navigate]);

  return (
    <CardContainer onClick={handleCardClick} role="button" tabIndex={0}>
      <CardTextTypography variant="body2">{application.text}</CardTextTypography>

      <ButtonContainer>
        <ActionButton
          variant="text"
          color="secondary"
          onClick={handleDelete}
          startIcon={<DeleteIcon width={20} height={20} />}
        >
          Delete
        </ActionButton>

        <ActionButton
          variant="text"
          color="secondary"
          onClick={handleCopy}
          endIcon={<CopyIcon width={20} height={20} />}
        >
          {isCopied ? 'Copied!' : 'Copy to clipboard'}
        </ActionButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ApplicationCard;
