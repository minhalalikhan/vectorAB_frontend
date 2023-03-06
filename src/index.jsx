import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";


import Navbar from './nav/Navbar';

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>

    <Navbar />

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
