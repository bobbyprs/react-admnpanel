import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContexApi from '../src/Components/ContexApi'
import * as mdb from 'mdb-ui-kit'; 

ReactDOM.render(
  <React.StrictMode>
    <ContexApi>
      <App />
    </ContexApi>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
