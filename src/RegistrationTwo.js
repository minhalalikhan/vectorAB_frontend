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
              Address
            </label>
            <input type="text" id="Username" placeholder='Enter Address' name="name"/>
          </div>
          <div class="form-element">
            <label for="Surname">
              City
            </label>
            <input type="text" id="Password" placeholder='Enter Your City' name="password"/>
          </div>
          <div class="form-element">
            <label for="Age">
              State
            </label>
            <input type="text" id="Password" placeholder='Enter Your State' name="password"/>
          </div>
          <div class="form-element">
            <label for="Age">
              Country
            </label>
            <input type="text" id="Password" placeholder='Enter Your Country' name="password"/>
          </div>
          </div>
      </form>
      <div className="Admin">
            <button className='Admin'>
            <Link style={{color:'white'}} to="/RegistrationOne">Previous Page</Link>
            </button>
            <button className='Admin'>
                <Link style={{color:'white'}} to="/RegistrationThree">Next Page</Link>
            </button>
      </div> 
    </div>
  );
}

export default UserLogin;