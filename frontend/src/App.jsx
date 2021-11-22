import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { Routes } from './Routes';
import { Notification } from './components';
import { GlobalStyle } from './globalStyle';

export const Context =
  React.createContext();

export const App = () => {
  const [value, setValue] =
    useState('');
  const [response, setResponse] =
    useState({});
  const [userData, setUserData] =
    useState({});

  return (
    <Context.Provider
      value={{
        response,
        setResponse,
        value,
        setValue,
        userData,
        setUserData,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Notification />
        <Routes />
      </ThemeProvider>
    </Context.Provider>
  );
};
