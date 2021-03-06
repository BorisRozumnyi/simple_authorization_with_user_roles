import React, {
  useContext,
  useEffect,
} from 'react';
import { getUsers } from '../state/actions';
import { Context } from '../state';

export const UserList = () => {
  const [state, dispatch] =
    useContext(Context);

  useEffect(() => {
    !state.userList?.list?.length &&
      !state.userList?.loading &&
      !state.userList?.errors
        ?.message &&
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
