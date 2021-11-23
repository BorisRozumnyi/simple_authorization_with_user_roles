import React, {
  useContext,
  useEffect,
} from 'react';
import { getUsers } from '../actions/getUsers';
import { Context } from '../App';

export const UserList = () => {
  const [state, dispatch] =
    useContext(Context);

  useEffect(() => {
    state.usersList.length === 0 &&
      !state.usersListError &&
      !state.loading &&
      getUsers(dispatch);
  }, [state, dispatch]);

  useEffect(() => {
    dispatch({
      type: 'CLEAR_USERS_LIST_ERROR',
    });
  }, [window.location.pathname, dispatch]);

  return (
    <div>
      <h1>Users</h1>
      <p>
        The list of users is available
        only for admins
      </p>
      {state?.usersList?.length > 0 && (
        <ul>
          {state?.usersList.map(
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
