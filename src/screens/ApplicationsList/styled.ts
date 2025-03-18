import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const TitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  },
}));

export const ApplicationsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));
