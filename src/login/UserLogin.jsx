import '../App.css'
import React from 'react';
import { useState } from 'react';
import validation from '../util_functions/Validation';
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios';



function UserLogin() {


  // Values Updating
  const [values, setValues] = useState({
    name: '',
    password: ''
  })

  // Updating Errors
  const [errors, setError] = useState({})
  const [login_error, setLoginError] = useState()


  // Changing Values
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })

  }
  const history = useNavigate();

  //Error Detection
  async function handleSubmit(e) {
    // Submit Hone ke baad form clear hona aur agle page se jane se rokta he
    e.preventDefault();
    const myErrors = validation(values);
    setError(myErrors);
    if (!myErrors.name && !myErrors.password) {

      let login_data = await axios.post("http://localhost:3002/vectorab-api/sign-in", {
        email: values.name,
        password: values.password,
      },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          }
        })

      if (login_data.status === 200) {
        // login successsful

        history("/Hello");
      }
      else
        setLoginError(true)
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div class="form">
          <h2>
            Student Login </h2>
          <div class="form-element">
            <label for="Username">
              Email
            </label>
            <input type="text" id="Username" placeholder='Enter Username' value={values.name} name="name" onChange={handleChange} />
            {errors.name && <p className='error_msg'>{errors.name}</p>}
          </div>
          <div class="form-element">
            <label for="Password">
              Password
            </label>
            <input type="password" id="Password" placeholder='Enter Password' value={values.password} name="password" onChange={handleChange} />
            {errors.password && <p className='error_msg'>{errors.password}</p>}
          </div>
          <div class="form-element">
            <button
              // disabled={(values.name.length > 2 && values.password.length > 2) ? false : true}
            >
              Login
            </button>
            {login_error && <p className='error_msg'>{"Login Failed"}</p>}
          </div>
        </div>
      </form>
      <div className="Admin">
        <button className='Admin'>
          <Link style={{ color: 'white', padding: '10px' }} to="/ForgotPass">Forgot Password</Link>
        </button>
        <button className='Admin'>
          <Link style={{ color: 'white' }} to="/SignUp">SignUp</Link>
        </button>
      </div>
    </div>
  );
}

export default UserLogin;