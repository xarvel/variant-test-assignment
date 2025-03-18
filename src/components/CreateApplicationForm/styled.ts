import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';

export interface StyledProps {
  $hasError?: boolean;
}

export const FormSection = Box;

export const PreviewSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(3),
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.shape.borderRadius,
  },
}));

export const PreviewContent = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  flexGrow: 1,
  width: '100%',
  overflowY: 'auto',
}));

export const PreviewActions = styled(Box)({
  textAlign: 'right',
});

export const FormTitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: '44px',
  paddingBottom: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const FormGroup = styled(FormControl)({
  display: 'flex',
  flexDirection: 'column',
});

export const Label = styled(InputLabel)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  position: 'relative',
  transform: 'none',
  marginBottom: `-${theme.spacing(1)}`,
  '&.Mui-focused': {
    color: theme.palette.text.primary,
  },
}));

// Custom styled Input
export const StyledInput = styled(Input, {
  shouldForwardProp: prop => prop !== '$hasError',
})<StyledProps>(({ theme, $hasError }) => ({
  fontSize: '14px',
  fontWeight: 500,

  padding: `${theme.spacing(1.25)} ${theme.spacing(1.5)}`,
  border: `1px solid ${$hasError ? '#D0D5DD' : theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  color: '#344054',
  width: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxShadow: $hasError
    ? `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${theme.palette.error.light}`
    : 'none',

  '&.MuiInput-root': {
    '&:before, &:after': {
      display: 'none', // Remove the default underline
    },
  },

  '&.Mui-focused': {
    outline: 'none',
    borderColor: $hasError ? theme.palette.error.light : theme.palette.success.light,
    boxShadow: $hasError
      ? `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${theme.palette.error.light}`
      : `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${theme.palette.success.light}`,
  },

  '& input::placeholder, & textarea::placeholder': {
    color: theme.palette.text.secondary,
  },
}));

export { StyledInput as Input };

export const CharCounterTypography = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  textAlign: 'left',
  marginTop: theme.spacing(0.5),
}));

export const FormActions = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(3),

  '& .MuiButton-root': {
    width: '100%',
  },

  '& .MuiButton-outlined': {
    color: '#344054',
    borderColor: '#D0D5DD',
  },
}));

export const ResultTextTypography = styled(Typography)({
  fontSize: '14px',
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap',
});

export const ErrorTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1.25),
  backgroundColor: theme.palette.error.light,
  borderRadius: '4px',
  marginBottom: theme.spacing(2),
  fontWeight: 500,
}));
