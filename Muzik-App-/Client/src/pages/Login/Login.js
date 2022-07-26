import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import login from "../../img/login.PNG";
import signup from "../../img/signup.png";
import config from "../../config";
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();
  const passwordPattern = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`;

  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  });

// handle inputs
  let name, value;
  const handleRegisterInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setSignUp({ ...signUp, [name]: value });
  };
  
  const handleLoginInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setLoginUser({ ...loginUser, [name]: value });
  };

  // connecting to backend
  const RegisterData = async (e) => {
   
    const { username, email, password } = signUp;

    const res = await fetch(config.apiRegisterUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();
    if(data.status === 409){
      window.alert("User already exists")
    }
    else if(data.status === 200){
      window.alert("User registered successfully");
    }
    else{
      window.alert('Registration failed');
    }

  };
  
  
  const UserLogin = async (e) => {
   
    const { email, password } = loginUser;

    // const res = await fetch(config.apiLoginUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   withCredentials: true,
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    const res = await axios.post(config.apiLoginUrl, loginUser, {
      headers: {
          "Content-Type": "application/json"
      }, withCredentials: true
  });

    const loginData = await res.data;
    console.log(loginData)
    console.log(loginData.user)
    if(loginData.status === 200){
      window.alert("logged in successfully");
      navigate("/home");
    }
    else if(loginData.status === 404){
      window.alert("You are not authorized. Please check your email.")
    }
    else if(loginData.status === 402){
      window.alert("You are not authoroized. please check your password.")
    }

  };

  const signUpButton = () => {
    document.getElementById("container").classList.add("sign-up-mode");

    document.getElementById("signin").classList.add("signin-signup2");
    document.getElementById("signin").classList.remove("signin-signup");

    document.getElementById("panel").classList.remove("right-panel2");
  };

  const signInButton = () => {
    document.getElementById("container").classList.remove("sign-up-mode");

    document.getElementById("signin").classList.remove("signin-signup2");
    document.getElementById("signin").classList.add("signin-signup");

    document.getElementById("panel").classList.add("right-panel2");
  };

  const [focused, setfocused] = useState(false);
    function handleFocus(e){
        setfocused(true);
    }

  return (
    <div className="container" id="container">
      <div className="forms-container">
        {/* LOGIN FORM */}

        <div className="signin-signup" id="signin">
          <form method="POST" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
                key="email"
                id="email"
                name="email"
                type="text" 
                placeholder="Email"
                value={loginUser.email}
                onChange={handleLoginInputs} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                id="password"
                key="password"
                name="password"
                type="password"
                placeholder="Password" 
                value={loginUser.password}
                onChange={handleLoginInputs}
                 />
            </div>
            <p onClick={()=>navigate("/forgotpassword")} className="forgot-password">Forgot your password ?</p>
            <button type="button" className="btn solid" onClick={UserLogin}>
              Login
            </button>
            <p className="social-text">Or Sign in with social Platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>

        {/* SIGN UP FORM */}

        <div className="signup-signup" id="signup">
          <form method="post" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
              className="registerinput"
                key="username"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={signUp.username}
                onChange={handleRegisterInputs}
                pattern= "^[A-Za-z0-9]{3,16}$"
                onBlur={handleFocus} 
                focused={focused.toString()}
              />
            </div>
            <span>UserName should be 3-16 characters and shouldn't include any special characters.</span>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
              className="registerinput"
                key="email"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={signUp.email}
                onChange={handleRegisterInputs}
                onBlur={handleFocus} 
                focused={focused.toString()}
              />
            </div>
            <span>Not a valid email</span>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
              className="registerinput"
                key="password"
                id="passwordw"
                name="password"
                type="password"
                placeholder="Password"
                value={signUp.password}
                onChange={handleRegisterInputs}
                pattern={passwordPattern}
                onBlur={handleFocus} 
                focused={focused.toString()}
              />
            </div>
            <span>Password should be between 8-20 characters.must contain 1 letter, 1 number, and 1 special character, i.e., !@#$%^*</span>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
              className="registerinput"
                key="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={signUp.confirmPassword}
                onChange={handleRegisterInputs}
                pattern={signUp.password}
                onBlur={handleFocus} 
                focused={focused.toString()}
              />
            </div>
            <span>Passwords does not match</span>
            <button type="button" className="btn solid" onClick={RegisterData}>
              Register
            </button>
            <p className="social-text">Or Sign Up with social Platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. vero sit
              blanditiis? Maiores reiciendis, ea repudiandae delectus, dolorum
              qui aspernatur odit perferendis doloribus corporis laboriosam
              mollitia suscipit quia inventore quidem!
            </p>
            <button
              className="btn transparent"
              id="sign-up-button"
              onClick={signUpButton}
            >
              Sign Up
            </button>
          </div>
          <img src={login} className="image" />
        </div>

        <div className="panel right-panel" id="panel">
          <div className="content">
            <h3>One of Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. vero sit
              blanditiis? Maiores reiciendis, ea repudiandae delectus, dolorum
              qui aspernatur odit perferendis doloribus corporis laboriosam
              mollitia suscipit quia inventore quidem!
            </p>
            <button
              className="btn transparent"
              id="sign-in-button"
              onClick={signInButton}
            >
              Sign In
            </button>
          </div>
          <img src={signup} className="image" />
        </div>
      </div>
    </div>
  );
}
