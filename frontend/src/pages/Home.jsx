import { Link } from 'react-router-dom';
import { frontend } from '../urls';

export const Home = () => (
  <div>
    <h1>Home</h1>
    <h2>
      Hello guest! Would you like to{' '}
      <Link to={frontend.registration}>
        register
      </Link>{' '}
      or{' '}
      <Link to={frontend.login}>
        login?
      </Link>
    </h2>
  </div>
);
