import React, { useContext, useState } from 'react';
import { api } from '../api';
import { InputOutline } from './Input';
import { request } from './request';
import { Notification } from './Notification';
import { Context } from '../App';

export const Registration = () => {
  const { response, setResponse } =
    useContext(Context);

  const fieldError = (fieldName) =>
    response.errors?.errors.find(
      ({ param }) => param === fieldName
    );

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
        error={fieldError('username')}
      />
      <InputOutline
        label="password"
        type="password"
        value={form.password}
        setValue={handleChange}
        error={fieldError('password')}
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
