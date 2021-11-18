import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { Routes } from './Routes';
import { Container, Notification} from './components';

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
        <Container>
          <Notification />
          <Routes />
        </Container>
      </ThemeProvider>
    </Context.Provider>
  );
};
