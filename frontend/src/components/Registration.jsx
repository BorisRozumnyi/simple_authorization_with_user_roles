import React, { useContext, useState } from 'react';
import { api } from '../api';
import { InputOutline } from './Input';
import { request } from './request';
import { Notification } from './Notification';
import { Context } from '../App';
import { fieldError } from '../utils/fieldError';

export const Registration = () => {
  const { response, setResponse } =
    useContext(Context);

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

  const handleRegistration = (e) => {
    e.preventDefault();
    request({
      url: api.registration,
      method: 'POST',
      body: form,
      callback: setResponse,
    });
  };

  return (
    <form>
      <InputOutline
        label="username"
        value={form.username}
        setValue={handleChange}
        error={response.errors?.errors && fieldError('username', response.errors?.errors)}
      />
      <InputOutline
        label="password"
        type="password"
        value={form.password}
        setValue={handleChange}
        error={response.errors?.errors && fieldError('password', response.errors?.errors)}
      />
      <button
        onClick={handleRegistration}
      >
        Sign in
      </button>
      <Notification msg={response.message} isError={Boolean(response.errors)} response={response} />
    </form>
  );
};
