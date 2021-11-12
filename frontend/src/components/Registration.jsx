import React, { useState } from 'react';
import { InputOutline } from './Input';

export const Registration = () => {
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

  return (
    <form
      className="text-start"
    >
      <InputOutline
        label="username"
        value={form.username}
        setValue={handleChange}
      />
      <InputOutline
        label="password"
        type="password"
        value={form.password}
        setValue={handleChange}
      />
      <div className="text-center">
        <button
          type="button"
          className="btn bg-gradient-primary w-100 my-4 mb-2"
        >
          Sign in
        </button>
      </div>
      <p className="mt-4 text-sm text-center">
        Don't have an account?
        <span className="text-primary text-gradient font-weight-bold">
          Sign up
        </span>
      </p>
    </form>
  );
};
