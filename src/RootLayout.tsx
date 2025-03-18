import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import { Header } from './components';
import { PageContainer } from './screens/styled';
import theme from './styles/theme';

export const RootLayout: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />

      <PageContainer>
        <Header />
        <Outlet />
      </PageContainer>
    </MuiThemeProvider>
  );
};
