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
    !state.userList?.list &&
      !state.userList?.loading &&
      getUsers(dispatch);
  }, [state, dispatch]);

  return (
    <div>
      <h1>Users</h1>
      <p>
        The list of users is available
        only for admins
      </p>
      {state?.userList?.list?.length >
        0 && (
        <ul>
          {state?.userList?.list.map(
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
