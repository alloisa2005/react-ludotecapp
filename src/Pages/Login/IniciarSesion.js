import React, { useState } from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

function IniciarSesion({ change }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  }

  const handlerInicioSesion = (e) => {    
    console.log(email, password);
    setEmail("");    
    setPassword("");
  }

  return (
    <>
      <div className="login_campos">
        <MailOutlineRoundedIcon className="login_iconos" />
        <input type="email" placeholder="E-mail" value={email} onChange={handlerEmail} />
      </div>
      <div className="login_campos">
        <HttpsRoundedIcon className="login_iconos" />
        <input type="Password" placeholder="Password" value={password} onChange={handlerPassword} />
      </div>
      <button className="itemCount_btn_cart" onClick={handlerInicioSesion}>Iniciar Sesión</button>
      <p onClick={change} >Crear Usuario</p>
    </>
  );
}

export default IniciarSesion;
