import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './UserLogin';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import AdminLogin from './AdminLogin';
import Registration from './Registration';
import Hello from './Hello';




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
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Hello' element={<Hello />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
