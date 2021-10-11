import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './icons/css/uicons-regular-rounded.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import UploadProvider from './providers/Upload';

ReactDOM.render(
  <UploadProvider>
    <App />
  </UploadProvider>, 
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
