import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './latihanKomponen/classComponent';
import Exam from './latihanKomponen/classConstraktor';
import HelloW from './latihanKomponen/fungsionalComponent';
import Kalkulator from './latihanKomponen/fungsiKalkulator';

// ReactDOM.createRoot(Reactcomponent,document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
