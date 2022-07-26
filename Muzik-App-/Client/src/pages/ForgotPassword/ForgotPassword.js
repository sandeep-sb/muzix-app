import React, {useState} from 'react'
import config from '../../config';
import "./ForgotPassword.css"

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleChange = (e)=>{
        console.log(e.target);
        setEmail(e.target.value);
    }

    const SendEmailforForgotPassword = async(e)=>{
        const res = await fetch(config.apiForgotPasswordUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                email
            })
        });

        const data = await res.json();
        if(data.status === 200){
            window.alert("Link has been sent to your email id");
        }
        else{
            window.alert("Some problem occured");
        }
    }
  return (
    <div className='forgotpassword'>
        <div className='text-container'>
            <h1>Password Reset</h1>
            <p>
                Enter your <strong>Muzix email address</strong> that you used to register. We'll send you an email with a link to reset your password.
            </p>
        </div>
        <div className='input-container'>
            <form method='POST'>
                <label>Enter email address</label>
                <input 
                    id='forgotpasswordemail' 
                    key="forgotpasswordemail" 
                    name='email' 
                    placeholder='Email Address' 
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required/>
            </form>
            <button type='button' onClick={SendEmailforForgotPassword}>Submit</button>
        </div>
    </div>
  )
}
