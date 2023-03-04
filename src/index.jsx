import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './login/UserLogin';
import SignUp from './login/SignUp';
import ForgotPass from './login/ForgotPass';
import Navbar from './nav/Navbar';
import AdminLogin from './login/AdminLogin';
import Registration from './login/Registration';
import { About, Contact, Hello } from './placeholders';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Hello' element={<Hello />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
