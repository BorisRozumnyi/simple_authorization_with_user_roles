import React, {
  useContext,
  useEffect,
} from 'react';
import { Context } from '../App';
import { api } from '../urls';
import { request } from '../utils';

export const UserList = () => {
  const {
    userData,
    setUserData,
    response,
    setResponse,
  } = useContext(Context);

  useEffect(() => {
    !response?.length &&
      response.message !==
        'Пользователь не авторизован' &&
      response.message !==
        'У вас нет доступа' &&
      request({
        url: api.users,
        callback: setResponse,
      });

    if (
      !userData.users &&
      response?.length
    ) {
      setUserData({
        ...userData,
        users: response,
      });
    }
  }, [
    response,
    userData,
    setResponse,
    setUserData,
  ]);

  return (
    <div>
      <h1>Users</h1>
      <p>
        The list of users is available
        only for admins
      </p>
      {userData?.users?.length > 0 && (
        <ul>
          {userData?.users.map(
            (user) => (
              <li key={user._id}>
                {user.username}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
