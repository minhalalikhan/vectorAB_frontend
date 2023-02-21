import './App.css';
import React from 'react';
import { Link } from "react-router-dom";



function UserLogin() {

  return (
    <div className="App">
      <form>
        <div class="form">
          <h2>
            Registration
          </h2>
          <div class="form-element">
            <label for="Username">
              Phone Number
            </label>
            <input type="text" id="Username" placeholder='Enter Your Phone Number' name="name"/>
          </div>
          <div class="form-element">
            <label for="Surname">
              OTP
            </label>
            <input type="password" id="Password" placeholder="Enter your OTP(Phone Number's)" name="password"/>
          </div>
          <div class="form-element">
            <label for="Age">
              Email
            </label>
            <input type="text" id="Password" placeholder='Enter Your Email' name="password"/>
          </div>
          <div class="form-element">
            <label for="Age">
              OTP
            </label>
            <input type="password" id="Password" placeholder="Enter Your OTP(Email's)" name="password"/>
          </div>
          </div>
      </form>
      <div className="Admin">
            <button className='Admin'>
                <Link style={{color:'white'}} to="/RegistrationThree">Previous Page</Link>
            </button>
            <button className='Admin'>
                Review Page
            </button>
      </div> 
    </div>
  );
}

export default UserLogin;