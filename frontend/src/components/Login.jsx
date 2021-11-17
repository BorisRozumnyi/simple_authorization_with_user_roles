import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../api';
import { Context } from '../App';
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

  const {
    setResponse,
    response,
    setUserData,
    userData,
  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    request({
      url: api.login,
      method: 'POST',
      body: form,
      callback: setResponse,
    });
  };

  useEffect(() => {
    const { username } = form;
    response?.token && response.token !== userData.token &&
      setUserData({ ...userData, username, token: response.token });
  }, [response, userData, setUserData, form]);

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
      <button>Sign in</button>
      <p>
        Don't have an account?
        <span>Sign up</span>
      </p>
    </form>
  );
};
