import React from 'react';
import {
  BrowserRouter as Router,
  Routes as RoutesRRD,
  Route,
  Link,
} from 'react-router-dom';
import {
  Registration,
  Login,
  UserList,
} from './pages';
import { Profile } from './components';
import { frontend } from './urls';

export const Routes = () => {
  return (
    <Router>
      <Profile />
      <div>
        <ul>
          <li>
            <Link to={frontend.home}>Home</Link>
          </li>
          <li>
            <Link to={frontend.login}>
              login
            </Link>
          </li>
          <li>
            <Link to={frontend.users}>
              users
            </Link>
          </li>
          <li>
            <Link to={frontend.registration}>
              registration
            </Link>
          </li>
        </ul>

        <hr />

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
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
