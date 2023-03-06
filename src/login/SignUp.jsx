import '../App.css'
import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



function SignUp({ setLoginSatus }) {


    const [values, setValues] = useState({
        email: '',
        password: '',
        otp: ''
    })

    const [Checkvalues, setCheckValues] = useState({
        email: 0,
        password: 0,
        otp: 0
    })


    const [signup, setsignup] = useState(0)
    const [errors, setError] = useState({})


    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const history = useNavigate();


    async function handleSubmit(e) {

        e.preventDefault();
        if (!Checkvalues.email) {

            let checkmail_data = await axios.post("http://localhost:3002/vectorab-api/check-email", {
                email: values.email,
            },
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })
            if (checkmail_data.status === 200) {
                // check mail successsful
                setError({ ...errors, email: '' })
                // send otp to mail for verification
                let sendotp = await axios.post("http://localhost:3002/vectorab-api/sign-up-otp-generation", {
                    email: values.email,
                },
                    {
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    })
                if (sendotp.status === 200) {
                    setCheckValues({ ...Checkvalues, email: 1 })
                }
                else {
                    setError({ ...errors, email: 'Couldn\'t send OTP' })
                }
            }
            else {
                setError({ ...errors, email: checkmail_data.data.message })
            }
        }

        else if (!Checkvalues.otp) {
            let checkOtp_data = await axios.post("http://localhost:3002/vectorab-api/sign-up-confirmation", {
                email: values.email,
                otp: values.otp
            },
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })

            if (checkOtp_data.status === 200) {
                // otp verified
                setCheckValues({ ...Checkvalues, otp: 1 })
                setError({ ...errors, otp: '' })
            }
            else {
                setError({ ...errors, otp: checkOtp_data.data.message })
            }
        }

        else if (!Checkvalues.password) {
            let checkpass_data = await axios.post("http://localhost:3002/vectorab-api/check-password", {
                password: values.password
            },
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })

            if (checkpass_data.status === 200) {
                // otp verified
                setCheckValues({ ...Checkvalues, password: 1 })
                setError({ ...errors, password: '' })
            }
            else {
                setError({ ...errors, password: checkpass_data.data.message })
            }
        }

        else {
            // finally call  sign up api
            let signUp_data = await axios.post("http://localhost:3002/vectorab-api/sign-up", {
                email: values.email,
                password: values.password
            },
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })

            if (signUp_data.status === 200) {


                setsignup(1)
                setLoginSatus(1)
                setTimeout(() => {
                    history('/Home')
                }, 2000)

            }
            else {
                setsignup(-1)
            }
        }
    }


    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div class="form">
                    <h2>Sign Up </h2>

                    <div class="form-element">
                        <label for="Username">
                            Enter Email
                        </label>
                        <input type="text" id="email" placeholder='Enter email' value={values.email} name="email" onChange={handleChange} />
                        {errors.email && <p className='error_msg'>{errors.email}</p>}
                    </div>

                    {Boolean(Checkvalues.email) && <div class="form-element">
                        <label for="otp">
                            Enter OTP
                        </label>
                        <input type="text" id="otp" placeholder='Enter otp' value={values.otp} name="otp" onChange={handleChange} />
                        {errors.otp && <p className='error_msg'>{errors.otp}</p>}
                    </div>}

                    {Boolean(Checkvalues.email && Checkvalues.otp) && <div class="form-element">
                        <label for="Password">
                            Set Password
                        </label>
                        <input type="password" id="password" placeholder='Enter Password' value={values.password} name="password" onChange={handleChange} />
                        {errors.password && <p className='error_msg'>{errors.password}</p>}
                    </div>}

                    <div class="form-element">
                        <button>
                            {Boolean(!Checkvalues.email && !Checkvalues.otp) && "Check Mail"}
                            {Boolean(Checkvalues.email && !Checkvalues.otp) && "Verify OTP"}
                            {Boolean(Checkvalues.email && Checkvalues.otp && !Checkvalues.password) && "Set New Password"}
                            {Boolean(Checkvalues.email && Checkvalues.otp && Checkvalues.password) && "Sign Up"}
                        </button>
                        {signup === -1 &&
                            <p className='error_msg'>
                                {"SignUp Failed \n try again"}</p>
                        }

                        {signup === 1 &&
                            <p className='success_msg'>
                                {"SignUp Successful "}</p>
                        }

                    </div>

                </div>
            </form>

            {/* { <div className="Admin">
                <button className='Admin'>
                    <Link style={{ color: 'white', padding: '10px' }} to="/AdminLogin">Forgot Password</Link>
                </button>
                <button className='Admin'>
                    <Link style={{ color: 'white' }} to="/SignUp">SignUp</Link>
                </button>
            </div>} */}
        </div>
    );
}

export default SignUp;