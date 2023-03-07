import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from './components/ProtectedRoute';

import AdminLogin from './login/AdminLogin';
import UserLogin from './login/UserLogin';
import SignUp from './login/SignUp';
import ForgotPass from './login/ForgotPass';

import Exam from './Exam';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const App = () => {

    const [loginStatus, setLoginStatus] = useState(1)
    return (
        <Routes>

            <Route path="/" element={
                <UserLogin setLoginStatus={setLoginStatus} />
            } />

            <Route path="/SignUp" element={

                <SignUp setLoginStatus={setLoginStatus} />

            } />

            <Route path="/ForgotPass" element={

                <ForgotPass />
            } />


            <Route path="/about" element={

                <About />

            } />


            <Route path="/contact" element={

                <Contact />

            } />


            <Route path='/AdminLogin' element={
                <ProtectedRoute loggedIn={loginStatus}>
                    <AdminLogin />
                </ProtectedRoute>
            } />


            <Route path='/Home' element={
                <ProtectedRoute loggedIn={loginStatus}>
                    <Home />
                </ProtectedRoute>
            } />

            <Route path='/Exam' element={
                <ProtectedRoute loggedIn={loginStatus}>
                    <Exam />
                </ProtectedRoute>
            } />

        </Routes>
    )
};

export default App;

