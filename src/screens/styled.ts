import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  width: '100%',
  margin: '0 auto',
  flex: 1,

  [theme.breakpoints.down('lg')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
