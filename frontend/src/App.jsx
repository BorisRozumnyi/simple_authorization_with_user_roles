import React, {
  createContext,
  useReducer,
} from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { Routes } from './Routes';
import { Notification } from './components';
import { GlobalStyle } from './globalStyle';
// import { Reducer } from './utils/reducer';
import {
  loginReducer,
  loginInitialState,
  userListReducer,
  userListInitialState,
  registrationReducer,
  registrationInitialState,
  notificationReducer,
  notificationInitialState,
} from './state/reducers';

const initialState = {
  login: loginInitialState,
  registration: registrationInitialState,
  userList: userListInitialState,
  notification: notificationInitialState,
};

export const Context = createContext(
  initialState
);

const combineReducers = (slices) => {
  return (state, action) =>
    Object.keys(slices).reduce(
      (acc, prop) => ({
        ...acc,
        [prop]: slices[prop](
          acc[prop],
          action
        ),
      }),
      state
    );
};

const reduceReducers = (
  ...reducers
) => {
  return (state, action) =>
    reducers.reduce(
      (acc, nextReducer) =>
        nextReducer(acc, action),
      state
    );
};

const Store = ({ children }) => {
  const rootReducer = combineReducers({
    login: reduceReducers(loginReducer),
    registration: reduceReducers(
      registrationReducer
    ),
    notification: reduceReducers(
      notificationReducer
    ),
    userList: reduceReducers(
      userListReducer
    ),
  });
  const [state, dispatch] = useReducer(
    rootReducer,
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
