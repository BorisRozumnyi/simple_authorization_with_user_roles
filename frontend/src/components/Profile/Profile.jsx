import React, {
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';
import { frontend } from '../../urls';
import { Profile as StyledProfile } from './Profile.styles';

export const Profile = () => {
  let navigate = useNavigate();
  const [state, dispatch] =
    useContext(Context);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate(frontend.login);
    dispatch({action: 'UPDATE_USER', payload: ''})
  };
  return (
    <StyledProfile>
      {state?.username ? (
        <>
          <span>
            {state?.username}
          </span>
          <button
            onClick={handleLogout}
          >
            logout
          </button>
        </>
      ) : (
        'not auth'
      )}
    </StyledProfile>
  );
};
