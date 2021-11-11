import React from 'react';
import {
  BrowserRouter as Router,
  Routes as RoutesRRD,
  Route,
  Link,
} from 'react-router-dom';
import { Registration, Login, UserList } from './components';

export const Routes = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/login">
              login
            </Link>
          </li>
          <li>
            <Link to="/users">
              users
            </Link>
          </li>
          <li>
            <Link to="/registration">
              registration
            </Link>
          </li>
        </ul>

        <hr />

        <RoutesRRD>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/users"
            element={<UserList />}
          />
          <Route
            path="/registration"
            element={<Registration />}
          />
        </RoutesRRD>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
