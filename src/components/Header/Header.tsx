import React from 'react';
import { useApplicationStore } from '../../store/applicationStore';
import { LogoIcon, HomeIcon, CheckIcon } from '../icons';
import { TOTAL_GOAL } from '../../constants';
import {
  HeaderContainer,
  Logo,
  LogoIconWrapper,
  Navigation,
  StyledLink,
  ProgressIndicator,
  ProgressDots,
  ProgressDot,
  HomeButton,
  LogoTextTypography,
  ProgressTextTypography,
} from './styled';

const ProgressDisplay: React.FC<{ displayCount: number }> = ({ displayCount }) => (
  <ProgressIndicator>
    <ProgressTextTypography color="#667085">
      {displayCount}/{TOTAL_GOAL} applications generated
    </ProgressTextTypography>
    {TOTAL_GOAL === displayCount ? (
      <CheckIcon width={28} height={28} />
    ) : (
      <ProgressDots>
        {[...Array(TOTAL_GOAL)].map((_, index) => (
          <ProgressDot key={index} active={index < displayCount} />
        ))}
      </ProgressDots>
    )}
  </ProgressIndicator>
);

const BrandLogo: React.FC = () => (
  <StyledLink to="/">
    <Logo>
      <LogoIconWrapper>
        <LogoIcon width={44} height={44} />
      </LogoIconWrapper>
      <LogoTextTypography color="text.primary">Alt+Shift</LogoTextTypography>
    </Logo>
  </StyledLink>
);

const Header: React.FC = () => {
  const applications = useApplicationStore(state => state.applications);

  return (
    <HeaderContainer>
      <BrandLogo />

      <Navigation>
        <ProgressDisplay displayCount={Math.min(applications.length, TOTAL_GOAL)} />

        <HomeButton to="/">
          <HomeIcon width={20} height={20} />
        </HomeButton>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
