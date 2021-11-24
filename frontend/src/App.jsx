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

const initialState = {
  username: '',
  usersList: [],
};

export const Context = createContext(
  initialState
);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    Reducer,
    initialState
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
