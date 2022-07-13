import React, {useState} from "react";
import "./Login.css";
import logo from "../../images/logo.png";

import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login() {

  const [isSignUp, setIsSignUp] = useState(true);
  
  const handlerChange = () => {
    setIsSignUp(!isSignUp);
  }

  return (
    <div className="login_container">
      <div className="login_left">
        <div className="login_left_logo">
          <img src={logo} alt="logo" />
          <h3>Ludotecapp</h3>
        </div>
      </div>

      <div className="login_right">
        <div className="login_right_form">
          <h2>Bienvenidos</h2>
            {
              isSignUp ? <SignUp change={handlerChange} /> : <SignIn change={handlerChange} /> 
            }            
        </div>
      </div>
    </div>
  );
}

export default Login;
