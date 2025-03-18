import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  height: '100%',
  minHeight: 200,
}));

export const LoadingTextTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: 16,
  textAlign: 'center',
}));
