import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create base theme
const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#0D7F4C',
      light: '#edfcf2',
      dark: '#0A6940',
      contrastText: '#FFFFFF',
    },
    divider: '#EAECF0',
    secondary: {
      main: '#71717A',
      light: '#D4D4D8',
      dark: '#52525B',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E11D48',
      light: '#FEE2E2',
      dark: '#B91C1C',
    },
    success: {
      main: '#10B981',
      light: '#D1FAE5',
      dark: '#047857',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#101828',
      secondary: '#71717A',
    },
    grey: {
      100: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: '"Fixel", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    h1: {
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: 1.5,
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1120,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
        sizeLarge: {
          padding: '12px 24px',
        },
        sizeSmall: {
          padding: '6px 12px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        elevation1: {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        },
        elevation2: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        },
        elevation3: {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          'label[data-shrink=false].MuiFormLabel-root ~ & ::-webkit-input-placeholder': {
            opacity: '1 !important',
          },
        },
        root: {
          borderRadius: 8,
          '&::placeholder': {
            color: '#667085',
            opacity: 1,
          },
          '& input::placeholder': {
            color: '#667085',
            opacity: 1,
          },
          '& textarea::placeholder': {
            color: '#667085',
            opacity: 1,
          },
        },
      },
    },
  },
});

// Apply responsive typography
const theme = responsiveFontSizes(baseTheme);

export default theme;
