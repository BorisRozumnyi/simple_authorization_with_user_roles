import React, {
  useContext,
  useState,
} from 'react';
import { Context } from '../App';
// import { fieldError } from '../utils';
import { InputOutline } from '../components/Input';
import { postLogin } from '../state/actions';

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

  const [, dispatch] =
    useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(dispatch, form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login form</h1>
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
      <button>Sign in</button>
      <p>
        Don't have an account?
        <span>Sign up</span>
      </p>
    </form>
  );
};
