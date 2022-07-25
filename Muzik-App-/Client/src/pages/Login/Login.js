import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import login from "../../img/login.PNG";
import signup from "../../img/signup.png";
import config from "../../config";

export default function Login() {

  const navigate = useNavigate();


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
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setSignUp({ ...signUp, [name]: value });
  };
  
  const handleLoginInputs = (e) => {
    console.log(e);
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

    const res = await fetch(config.apiLoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const loginData = await res.json();
    console.log(loginData)
    if(loginData.status === 200){
      window.alert("logged in successfully");
      navigate("/home");
    }
    else if(loginData.status === 401){
      window.alert("You are not authorized. Please check your email and password.")
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
                key="username"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={signUp.username}
                onChange={handleRegisterInputs}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                key="email"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={signUp.email}
                onChange={handleRegisterInputs}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                key="password"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={signUp.password}
                onChange={handleRegisterInputs}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                key="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={signUp.confirmPassword}
                onChange={handleRegisterInputs}
              />
            </div>
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
