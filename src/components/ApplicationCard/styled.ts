import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
}));

export const CardTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  margin: 0,
  whiteSpace: 'pre-line',
  lineHeight: 1.5,
  maxHeight: 150,
  overflow: 'hidden',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    background: `linear-gradient(to bottom, rgba(242, 244, 247, 0) 0%, rgba(242, 244, 247, 0.8) 70%, ${theme.palette.grey[100]} 100%)`,
    pointerEvents: 'none',
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  minWidth: 'auto',
  fontWeight: 600,
}));
