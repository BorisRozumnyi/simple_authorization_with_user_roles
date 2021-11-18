import React, { useState } from 'react';
import { api } from '../urls';
import { request } from '../utils';

export const UserList = () => {
  const [users, setUsers] = useState(
    []
  );
  const handleGetUsers = (e) => {
    const response = request({
      url: api.users,
      callback: setUsers,
    });
    console.log(response);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
  };
  return (
    <div>
      <h1>Users</h1>
      <p>
        The list of users is available
        only for admins
      </p>
      <button onClick={handleGetUsers}>
        get users
      </button>
      <button onClick={handleLogout}>
        logout
      </button>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
