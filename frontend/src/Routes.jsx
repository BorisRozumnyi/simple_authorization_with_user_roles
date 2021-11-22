import React from 'react';
import {
  BrowserRouter as Router,
  Routes as RoutesRRD,
  Route,
} from 'react-router-dom';
import {
  Registration,
  Login,
  UserList,
  Home,
} from './pages';
import { Container } from './components';
import { frontend } from './urls';
import { Header } from './components/Header';

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Container>
        <RoutesRRD>
          <Route
            path={frontend.home}
            element={<Home />}
          />
          <Route
            path={frontend.login}
            element={<Login />}
          />
          <Route
            path={frontend.users}
            element={<UserList />}
          />
          <Route
            path={frontend.registration}
            element={<Registration />}
          />
        </RoutesRRD>
      </Container>
    </Router>
  );
};
