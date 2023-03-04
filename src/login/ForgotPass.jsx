import '../App.css'
import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



function ForgotPass() {


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


    const [reset, setreset] = useState(0)
    const [errors, setError] = useState({})


    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const history = useNavigate();


    async function handleSubmit(e) {

        e.preventDefault();
        if (!Checkvalues.email) {

            let checkmail_data = await axios.post("http://localhost:3002/vectorab-api/forgot-password-otp-generation", {
                email: values.email,
            },
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })
            if (checkmail_data.status === 200) {
                // check mail successsful
                setCheckValues({ ...Checkvalues, email: 1 })
                setError({ ...errors, email: '' })
            }
            else {
                setError({ ...errors, email: checkmail_data.data.message })
            }
        }

        else if (!Checkvalues.otp) {
            let checkOtp_data = await axios.post("http://localhost:3002/vectorab-api/forgot-password-confirmation", {
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
            let reset_data = await axios.post("http://localhost:3002/vectorab-api/reset-password", {
                email: values.email,
                password: values.password
            },
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })

            if (reset_data.status === 200) {
                // otp verified

                setreset(1)
                setTimeout(() => {
                    history('/')
                }, 2000);
            }
            else {
                setreset(-1)
                // setsignupError(true)
            }
        }
    }


    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div class="form">
                    <h2>Forgot Password </h2>

                    <div class="form-element">
                        <label for="Username">
                            Verify Email
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
                            Set New Password
                        </label>
                        <input type="password" id="password" placeholder='Set New Password' value={values.password} name="password" onChange={handleChange} />
                        {errors.password && <p className='error_msg'>{errors.password}</p>}
                    </div>}

                    <div class="form-element">
                        <button>
                            {Boolean(!Checkvalues.email && !Checkvalues.otp) && "Check Mail"}
                            {Boolean(Checkvalues.email && !Checkvalues.otp) && "Verify OTP"}
                            {Boolean(Checkvalues.email && Checkvalues.otp && !Checkvalues.password) && "Check New Password"}
                            {Boolean(Checkvalues.email && Checkvalues.otp && Checkvalues.password) && "Reset Passwowrd"}
                        </button>
                        {reset === -1 &&
                            <p className='error_msg'>
                                {"Reset Failed \n try again later"}</p>
                        }
                        {reset === 1 &&
                            <p className='success_msg'>
                                {"Reset successful"}</p>
                        }

                    </div>

                </div>
            </form>
        </div>
    );
}

export default ForgotPass;