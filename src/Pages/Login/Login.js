import React, { useState } from "react";
import "./Login.css";
import logo from "../../images/logo.png";

import IniciarSesion from "./IniciarSesion";
import CrearUsuario from "./CrearUsuario";


function Login() {  

  const [inicioSesion, setInicioSesion] = useState(true);

  const handlerChange = () => {
    setInicioSesion(!inicioSesion);
  };

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
          {inicioSesion ? (
            <IniciarSesion change={handlerChange} />
          ) : (
            <CrearUsuario change={handlerChange} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
