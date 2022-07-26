import React from "react";
import "./LandingTop.css";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router";

export default function LandingTop() {
  const navigate = useNavigate();

  const showSettings=()=>{
    if(document.getElementById('options').className === "options"){
    document.getElementById('options').classList.add('optionsHidden');
    document.getElementById('options').classList.remove('options');
    }
    else{
    document.getElementById('options').classList.remove('optionsHidden');
    document.getElementById('options').classList.add('options');
    
  }
  }

  const UserLogout = async(e)=>{
    const res = await axios.post(config.apiLogoutUrl, {
      headers: {
          "Content-Type": "application/json",
      }, withCredentials: true
    });

    const data = await res.data;
    console.log(data);
    if(data.status === 200){
      window.alert("User Logged Out");
      navigate("/");
    }else{
      window.alert("Some problem occured");
    }
  }

  return (
    <div className="LandingTop">
      <div className="details">
        <div className="User" onClick={() => showSettings()}>
          <h5>
            <i className="LandingIcon fa-solid fa-user"></i>
            Welcome, Paras Singh
            <i className=" LandingIconDown fa-solid fa-caret-down"></i>
          </h5>
        </div>
        <div className="optionsHidden" id="options">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Settings <i className=" optionsIcons fa-solid fa-gear"></i></li>
            <li className="list-group-item">Profile <i className=" optionsIcons  fa-solid fa-user"></i></li>
            <li className="list-group-item" onClick={UserLogout}>Log Out <i className=" optionsIcons  fa-solid fa-arrow-right-from-bracket"></i></li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

