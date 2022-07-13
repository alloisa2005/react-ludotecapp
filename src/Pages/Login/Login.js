import React from "react";
import "./Login.css";
import logo from "../../images/logo.png";

import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

function Login() {
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

          <div className="login_campos">
            <MailOutlineRoundedIcon className="login_iconos" />
            <input type="mail" placeholder="E-mail" />
          </div>
          <div className="login_campos">
            <HttpsRoundedIcon className="login_iconos" />
            <input type="Password" placeholder="Password" />
          </div>
          <button className="itemCount_btn_cart">Iniciar Sesión</button>          
          <p>Crear Usuario</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
