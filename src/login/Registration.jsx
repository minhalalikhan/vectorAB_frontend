import './Registration.css';
import React from 'react';
import { useState } from 'react';
//import { Link } from "react-router-dom";

function Registration() {

  const [firstName, setfirstName] = useState("");
  const [surName, setsurName] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [schoolname, setschoolname] = useState("");
  const [schooladdress, setschooladdress] = useState("");
  const [collegename, setcollegename] = useState("");
  const [collegeaddress, setcollegeaddress] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [otp, setotp] = useState("");


  const [allEntry, setallEntry] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = {
      firstName:firstName,
      surName:surName,
      age:age,
      gender:gender,
      address:address,
      city:city,
      state:state,
      schoolname:schoolname,
      schooladdress:schooladdress,
      collegename:collegename,
      collegeaddress:collegeaddress,
      phonenumber:phonenumber,
      email:email,
      otp:otp
    };

      setallEntry(...allEntry,newEntry);
      console.log(allEntry);
  }
  

  return (
    <div className="Ap">
      <form action='' onSubmit={submitForm}>
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
                  id="age" 
                  placeholder='Enter Your Age' 
                  name="age" 
                  autoComplete='off' 
                  value={age} 
                  onChange={(e) => setage(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingLeft: '20px' }}>
            <label for="Gender">
              Gender
            </label>
            <br></br>
            <input type="text" 
                  id="gender" 
                  placeholder='Enter Your Gender' 
                  name="gender" 
                  autoComplete='off' 
                  value={gender} 
                  onChange={(e) => setgender(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingRight: '20px'  }}>
            <label for="Address">
              Address
            </label>
            <input type="text" 
                  id="address" 
                  placeholder='Enter Address' 
                  name='address'
                  autoComplete='off'
                  value={address}  
                  onChange={(e) => setaddress(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingLeft: '20px' }}>
            <label for="City">
              City
            </label>
            <input type="text" 
                  id="City" 
                  placeholder='Enter Your City' 
                  name='city'
                  autoComplete='off'
                  value={city}
                  onChange={(e) => setcity(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'left', width: '50%', paddingRight: '20px'  }}>
            <label for="State">
              State
            </label>
            <input type="text" 
                  id="State" 
                  placeholder='Enter Your State' 
                  name="state"
                  autoComplete='off'
                  value={state}
                  onChange={(e) => setstate(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingLeft: '20px' }}>
            <label for="Username">
              School Name
            </label>
            <input type="text" 
                  id="SchoolName" 
                  placeholder="Enter Your School's Name"
                  name="SchoolName"
                  autoComplete='off'
                  value={schoolname}
                  onChange={(e) => setschoolname(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingLeft: '20px' }}>
            <label for="School's Address">
              School's Address
            </label>
            <input type="text" 
                  id="School's Address" 
                  placeholder="Enter Your School's Address" 
                  name="schooladdress"
                  autoComplete='off'
                  value={schooladdress}
                  onChange={(e) => setschooladdress(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingRight: '20px' }}>
            <label for="College Name">
              College Name
            </label>
            <input type="text" 
                  id="College Name" 
                  placeholder="Enter Your College's Name" 
                  name="collegename"
                  autoComplete='off'
                  value={collegename}
                  onChange={(e) => setcollegename(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingLeft: '20px'  }}>
            <label for="College Address">
              College's Address
            </label>
            <input type="text" 
                  id="collegeaddress" 
                  placeholder="Enter Your College's Address" 
                  name="collegeaddress"
                  autoComplete='off'
                  value={collegeaddress}
                  onChange={(e) => setcollegeaddress(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingRight: '20px' }}>
            <label for="PhoneNumber">
              Phone Number
            </label>
            <input type="text" 
                  id="phonenumber" 
                  placeholder='Enter Your Phone Number' 
                  name="phonenumber"
                  autoComplete='off'
                  value={phonenumber}
                  onChange={(e) => setphonenumber(e.target.value)}/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingLeft: '20px'  }}>
            <label for="otp">
              OTP
              <span style={{color: 'red' }}>*</span>
            </label>
            <input type="text" 
                  id="otp" 
                  placeholder="Enter Your OTP(Email's)" 
                  name="otp"
                  autoComplete='off'
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  required/>
          </div>
          <div class="form-element" style={{ float: 'right', width: '50%', paddingRight: '20px'  }}>
            <label for="email">
              Email
              <span style={{color: 'red' }}>*</span>
            </label>
            <input type="text" 
                  id="email" 
                  placeholder="Enter Your Email" 
                  name="email"
                  autoComplete='off'
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required/>
          </div>
        </div>
        <div>
        <button className='Submit'>Submit</button>
        </div>
      </form>

    </div>
  );
}

export default Registration;