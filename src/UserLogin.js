import './App.css';
import React from 'react';
import { useState } from 'react';
import validation from './Validation';
import { useNavigate } from "react-router-dom";


function UserLogin() {

  function AdminClick() {
    
  }

  // Values Updating
  const [values, setValues] = useState({
    name: '',
    password: ''
  })

  // Updating Errors
  const [errors, setError] = useState({})

 // Changing Values
  function handleChange(e) {
    setValues({...values, [e.target.name]: e.target.value})}
  const history = useNavigate();

  //Error Detection
  function handleSubmit(e) {
    // Submit Hone ke baad form clear hona aur agle page se jane se rokta he
    e.preventDefault();
    const myErrors = validation(values);
    setError(myErrors);
    if(!myErrors.name && !myErrors.password) {
      history("/hello");
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div class="form">
          <h2>
            User Login
          </h2>
          <div class="form-element">
            <label for="Username">
              Username
            </label>
            <input type="text" id="Username" placeholder='Enter Username' value={values.name} name="name" onChange={handleChange}/>
            {errors.name && <p style={{color:"red", fontSize: "13px"}}>{errors.name}</p>}
          </div>
          <div class="form-element">
            <label for="Password">
              Password
            </label>
            <input type="password" id="Password" placeholder='Enter Password' value={values.password} name="password" onChange={handleChange}/>
            {errors.password && <p style={{color:"red", fontSize: "13px"}}>{errors.password}</p>}
          </div>
          <div class="form-element">
            <button>
              Apply
            </button>
          </div>
          </div>
      </form>
      <div className="Admin">
            <button className='Admin' onClick={AdminClick}>
              Admin Login
            </button>
            <button className='Admin'>
              Sign Up
            </button>
      </div> 
    </div>
  );
}

export default UserLogin;