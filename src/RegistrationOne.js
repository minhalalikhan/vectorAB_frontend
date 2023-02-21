import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';


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
              First Name
            </label>
            <input type="text" id="Username" placeholder='Enter Your First Name' name="name"/>
          </div>
          <div class="form-element">
            <label for="Surname">
              Last Name
            </label>
            <input type="text" id="Password" placeholder='Enter Your Last Name' name="password"/>
          </div>
          <div class="form-element">
            <label for="Age">
              Age
            </label>
            <input type="text" id="Password" placeholder='Enter Age' name="password"/>
          </div>
          <div class="form-element">
            <label for="Username">
              Gender
            </label>
            <br></br>
            <select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Rather Not To Say">Rather Not To Say</option>
            </select>
          </div>
          </div>
      </form>
      <div className="Admin">
            <button className='Admin'>
              Previous Page
            </button>
            <button className='Admin'>
              <Link style={{color:'white'}} to="/RegistrationTwo">Next Page</Link>
            </button>
      </div> 
    </div>
  );
}

export default UserLogin;