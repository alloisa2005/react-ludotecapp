import React from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

function SignUp({ change }) {
  return (
    <>
      <div className="login_campos">
        <MailOutlineRoundedIcon className="login_iconos" />
        <input type="mail" placeholder="E-mail" />
      </div>
      <div className="login_campos">
        <HttpsRoundedIcon className="login_iconos" />
        <input type="Password" placeholder="Password" />
      </div>
      <button className="itemCount_btn_cart">Iniciar Sesión</button>
      <p onClick={change} >Crear Usuario</p>
    </>
  );
}

export default SignUp;
