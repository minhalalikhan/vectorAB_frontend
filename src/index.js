import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './UserLogin';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import AdminLogin from './AdminLogin';
import RegistrationOne from './RegistrationOne';
import RegistrationTwo from './RegistrationTwo';
import RegistrationThree from './RegistrationThree';
import RegistrationFour from './RegistrationFour';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/RegistrationOne' element={<RegistrationOne />} />
        <Route path='/RegistrationTwo' element={<RegistrationTwo />} />
        <Route path='/RegistrationThree' element={<RegistrationThree />} />
        <Route path='/RegistrationFour' element={<RegistrationFour />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
