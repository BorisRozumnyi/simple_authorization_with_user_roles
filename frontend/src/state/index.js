import React, {
  createContext,
  useReducer,
} from 'react';
import {
  loginReducer,
  loginInitialState,
  userListReducer,
  userListInitialState,
  registrationReducer,
  registrationInitialState,
  notificationReducer,
  notificationInitialState,
} from './reducers';

const initialState = {
  login: loginInitialState,
  registration:
    registrationInitialState,
  userList: userListInitialState,
  notification:
    notificationInitialState,
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

export const Store = ({ children }) => {
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
