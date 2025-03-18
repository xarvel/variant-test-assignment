import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { PlusIcon } from '../icons';
import { useApplicationsCount, useHasMetGoal } from '../../store/applicationStore';
import { TOTAL_GOAL } from '../../constants';
import {
  BannerContainer,
  BannerContent,
  CreateButton,
  ProgressContainer,
  ProgressDots,
  ProgressDot,
  BannerTitle,
  BannerDescription,
  ProgressCount,
} from './styled';

const GoalBanner: React.FC = () => {
  const applicationsCount = useApplicationsCount();
  const hasMetGoal = useHasMetGoal();
  const navigate = useNavigate();

  const handleCreateClick = useCallback((): void => {
    navigate('/create');
  }, [navigate]);

  // Don't show the banner if goal is reached
  if (hasMetGoal) return null;

  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle variant="h2">Hit your goal</BannerTitle>
        <BannerDescription variant="body1" color="text.secondary">
          {'Generate and send out couple more job applications \n today to get hired faster'}
        </BannerDescription>
        <CreateButton>
          <Button
            variant="contained"
            onClick={handleCreateClick}
            startIcon={<PlusIcon />}
            size="large"
          >
            Create New
          </Button>
        </CreateButton>
        <ProgressContainer>
          <ProgressDots>
            {[...Array(TOTAL_GOAL)].map((_, index) => (
              <ProgressDot key={index} active={index < applicationsCount} />
            ))}
          </ProgressDots>
          <ProgressCount variant="body2" color="text.secondary">
            {Math.min(applicationsCount, TOTAL_GOAL)} out of {TOTAL_GOAL}
          </ProgressCount>
        </ProgressContainer>
      </BannerContent>
    </BannerContainer>
  );
};

export default GoalBanner;
