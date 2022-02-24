import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';

//** react router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);