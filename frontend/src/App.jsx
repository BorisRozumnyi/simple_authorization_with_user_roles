import React, {
  createContext,
  useReducer,
} from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { Routes } from './Routes';
import { Notification } from './components';
import { GlobalStyle } from './globalStyle';
import { Reducer } from './utils/reducer';

const initialStatye = {
  username: '',
  usersList: [],
};

export const Context = createContext(
  initialStatye
);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    Reducer,
    initialStatye
  );

  return (
    <Context.Provider
      value={[state, dispatch]}
    >
      {children}
    </Context.Provider>
  );
};

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
