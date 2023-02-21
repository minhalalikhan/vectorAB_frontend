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
              School Name
            </label>
            <input type="text" id="Username" placeholder="Enter Your School's Name" name="name"/>
          </div>
          <div class="form-element">
            <label for="Age">
              School's Address
            </label>
            <input type="text" id="Password" placeholder="Enter Your School's Address" name="password"/>
          </div>
          <div class="form-element">
            <label for="Surname">
              College Name
            </label>
            <input type="text" id="Password" placeholder="Enter Your College's Name" name="password"/>
          </div>
          <div class="form-element">
            <label for="Age">
              College's Address
            </label>
            <input type="text" id="Password" placeholder="Enter Your College's Address" name="password"/>
          </div>
          </div>
      </form>
      <div className="Admin">
            <button className='Admin'>
                <Link style={{color:'white'}} to="/RegistrationTwo">Previous Page</Link>
            </button>
            <button className='Admin'>
                <Link style={{color:'white'}} to="/RegistrationFour">Next Page</Link>
            </button>
      </div> 
    </div>
  );
}

export default UserLogin;