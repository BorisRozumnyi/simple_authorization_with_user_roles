import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes } from './Routes';
import { Container } from './components/Container';
import { Profile } from './components/Profile';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
        <Profile username="lonnnnnnng test name" />
        <Routes />
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
