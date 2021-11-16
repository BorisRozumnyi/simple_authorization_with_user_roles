import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { Routes } from './Routes';
import { Container } from './components/Container';
import { Profile } from './components/Profile';

export const Context = React.createContext();

export const App = () => {
  const [value, setValue] =
    useState('');
  const [response, setResponse] =
    useState({});
  const [data, setData] =
    useState({});

  return (
    <Context.Provider
      value={{ response, setResponse, value, setValue, data, setData}}
    >
      <ThemeProvider theme={theme}>
        <Container>
          <Profile username="lonnnnnnng test name" />
          <Routes />
        </Container>
      </ThemeProvider>
    </Context.Provider>
  );
};
