import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApplicationCard, GoalBanner } from '../../components';
import { PlusIcon } from '../../components/icons';
import { useApplicationStore } from '../../store/applicationStore';
import { ContentContainer } from '../styled';
import { TitleRow, ApplicationsGrid } from './styled';
import { Button, Typography } from '@mui/material';

const ApplicationsList: FC = () => {
  const applications = useApplicationStore(state => state.applications);
  const navigate = useNavigate();

  const handleNavigateToCreate = useCallback((): void => {
    navigate('/create');
  }, [navigate]);

  const hasApplications = applications.length > 0;

  return (
    <ContentContainer>
      <TitleRow>
        <Typography variant="h1" component="h1" fontWeight="600">
          Applications
        </Typography>
        <Button
          variant="contained"
          onClick={handleNavigateToCreate}
          startIcon={<PlusIcon />}
          size="medium"
        >
          Create New
        </Button>
      </TitleRow>

      {hasApplications && (
        <ApplicationsGrid>
          {applications.map(application => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </ApplicationsGrid>
      )}

      <GoalBanner />
    </ContentContainer>
  );
};

export default ApplicationsList;
