import React, {
  useContext,
  useState,
} from 'react';
import { Context } from '../App';
import { fieldError } from '../utils';
import { InputOutline } from '../components';
import { postRegistration } from '../actions/postRegistration';

export const Registration = () => {
  const [, dispatch] =
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
    postRegistration(dispatch, form);
  };

  return (
    <form>
      <h1>Registration</h1>
      <InputOutline
        label="username"
        value={form.username}
        setValue={handleChange}
        // error={response.errors?.errors && fieldError('username', response.errors?.errors)}
      />
      <InputOutline
        label="password"
        type="password"
        value={form.password}
        setValue={handleChange}
        // error={response.errors?.errors && fieldError('password', response.errors?.errors)}
      />
      <button
        onClick={handleRegistration}
      >
        Sign Up
      </button>
    </form>
  );
};
