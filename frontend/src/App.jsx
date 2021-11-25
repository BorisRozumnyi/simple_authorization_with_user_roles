import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { Routes } from './Routes';
import { Notification } from './components';
import { GlobalStyle } from './globalStyle';
import { Store } from './state';

export const App = () => {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Notification />
        <Routes />
      </ThemeProvider>
    </Store>
  );
};
