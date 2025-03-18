import { Box, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',

  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(2),
  },
}));

export const Logo = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const LogoIconWrapper = styled(Box)({
  width: 44,
  height: 44,
});

export const LogoTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const Navigation = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
}));

export const StyledLink = styled(RouterLink)({
  textDecoration: 'none',
  color: 'inherit',
});

export const HomeButton = styled(RouterLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.secondary,
  transition: `all ${theme.transitions.duration.standard}ms`,
  textDecoration: 'none',

  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
  },
}));

export const ProgressIndicator = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const ProgressTextTypography = styled(Typography)({
  fontSize: 18,
  fontWeight: 400,
});

export const ProgressDots = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(0.5),
}));

interface ProgressDotProps {
  active: boolean;
}

export const ProgressDot = styled(Box, {
  shouldForwardProp: prop => prop !== 'active',
})<ProgressDotProps>(({ theme, active }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.common.black,
  opacity: active ? 1 : 0.24,
  transition: `background-color ${theme.transitions.duration.standard}ms`,
}));
