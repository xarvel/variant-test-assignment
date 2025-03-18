import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface ProgressDotProps {
  active: boolean;
}

export const BannerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius * 1.5,
  padding: theme.spacing(6),
  margin: `${theme.spacing(3)} 0`,

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)} 0`,
  },
}));

export const BannerContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const BannerTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  marginBottom: theme.spacing(3),
  maxWidth: 500,

  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
    marginBottom: theme.spacing(2),
  },
}));

export const CreateButton = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },

  '& .MuiButton-root': {
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
    fontSize: '16px',
  },
}));

export const ProgressContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const ProgressDots = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

export const ProgressDot = styled(Box, {
  shouldForwardProp: prop => prop !== 'active',
})<ProgressDotProps>(({ theme, active }) => ({
  width: 32,
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.palette.text.primary,
  opacity: active ? 1 : 0.24,
  transition: `background-color ${theme.transitions.duration.standard}ms`,
}));

export const ProgressCount = styled(Typography)({
  fontSize: 14,
});
