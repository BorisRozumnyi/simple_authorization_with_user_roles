import React, { useState } from 'react';

export const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login form</h1>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
};
