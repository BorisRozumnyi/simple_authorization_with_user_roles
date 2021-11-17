import React, {
  useContext,
} from 'react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { Context } from '../../App';
import { Profile as StyledProfile } from './Profile.styles';

export const Profile = () => {
  let navigate = useNavigate();

  const { userData, setUserData } =
    useContext(Context);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setUserData({});
  };
  if (userData?.username) {
    return (
      <StyledProfile>
        {userData?.username}
        <button onClick={handleLogout}>
          logout
        </button>
      </StyledProfile>
    );
  }
  return (
    <h2>
      Hello guest! Would you like to{' '}
      <Link to="/registration">
        register
      </Link>{' '}
      or <Link to="/login">login?</Link>
    </h2>
  );
};
