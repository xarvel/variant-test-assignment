import React from 'react';
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles: React.FC = () => {
  return (
    <MuiGlobalStyles
      styles={{
        '@font-face': [
          {
            fontFamily: 'Fixel',
            src: 'url("/fonts/Fixel-Regular.woff2") format("woff2")',
            fontWeight: 400,
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
          {
            fontFamily: 'Fixel',
            src: 'url("/fonts/Fixel-Medium.woff2") format("woff2")',
            fontWeight: 500,
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
          {
            fontFamily: 'Fixel',
            src: 'url("/fonts/Fixel-SemiBold.woff2") format("woff2")',
            fontWeight: 600,
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        ],
      }}
    />
  );
};

export default GlobalStyles;
