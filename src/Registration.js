import './Registration.css';
import React from 'react';
import { useState } from 'react';


function Registration() {

  const [firstName, setfirstName] = useState("");
  const [surName, setsurName] = useState("");
  const [age, setage] = useState("");
  

  return (
    <div className="Ap">
      <form>
        <div class="form">
          <h2>
            Registration
          </h2>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingRight: '20px'  }}>
            <label for="Username">
              First Name
            </label>
            <input type="text" 
                  id="Username" 
                  placeholder='Enter Your First Name' 
                  name="name" 
                  autoComplete='off' 
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingLeft: '20px'  }}>
            <label for="Surname">
              Last Name
            </label>
            <input type="text" 
                  id="Password" 
                  placeholder='Enter Your Last Name' 
                  name="password" 
                  autoComplete='off' 
                  value={surName}
                  onChange={(e) => setsurName(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingRight: '20px'  }}>
            <label for="Age">
              Age
            </label>
            <input type="text" 
                  id="Age" 
                  placeholder='Enter Age' 
                  name="password" 
                  autoComplete='off' 
                  value={age} 
                  onChange={(e) => setage(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingLeft: '20px' }}>
            <label for="Gender">
              Gender
            </label>
            <br></br>
            <select>
              <option value="None">None</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Rather Not To Say">Rather Not To Say</option>
            </select>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingRight: '20px'  }}>
            <label for="Address">
              Address
            </label>
            <input type="text" 
                  id="Address" placeholder='Enter Address' 
                  name="name"/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingLeft: '20px' }}>
            <label for="City">
              City
            </label>
            <input type="text" 
                  id="City" 
                  placeholder='Enter Your City' 
                  name="password"/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingRight: '20px'  }}>
            <label for="State">
              State
            </label>
            <input type="text" 
                  id="State" 
                  placeholder='Enter Your State' 
                  name="password"/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingLeft: '20px' }}>
            <label for="Username">
              School Name
            </label>
            <input type="text" 
                  id="Username" 
                  placeholder="Enter Your School's Name" 
                  name="name"/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingLeft: '20px' }}>
            <label for="School's Address">
              School's Address
            </label>
            <input type="text" 
                  id="School's Address" 
                  placeholder="Enter Your School's Address" 
                  name="password"/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingRight: '20px' }}>
            <label for="College Name">
              College Name
            </label>
            <input type="text" 
                  id="College Name" 
                  placeholder="Enter Your College's Name" 
                  name="password"/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingLeft: '20px'  }}>
            <label for="Age">
              College's Address
            </label>
            <input type="text" 
                  id="Password" 
                  placeholder="Enter Your College's Address" 
                  name="password"/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingRight: '20px' }}>
            <label for="Username">
              Phone Number
            </label>
            <input type="text" 
                  id="Username" 
                  placeholder='Enter Your Phone Number' 
                  name="name"/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingLeft: '20px'  }}>
            <label for="Age">
              Email
            </label>
            <input type="text" 
                  id="Password" 
                  placeholder='Enter Your Email' 
                  name="password"/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingRight: '20px'  }}>
            <label for="Age">
              OTP
            </label>
            <input type="password" 
                  id="Password" 
                  placeholder="Enter Your OTP(Email's)" 
                  name="password"/>
          </div>
          </div>
      </form>
      </div>
  );
}

export default Registration;