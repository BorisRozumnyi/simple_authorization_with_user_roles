import React, { useState } from 'react';
import { api } from '../api';
import { request } from './request';


export const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setForm({
      ...form,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    request({
      url: api.login,
      method: 'POST',
      body: form,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login form</h1>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
};
