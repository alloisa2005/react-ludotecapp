import React from 'react'
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

function SignIn({ change }) {
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
      <div className="login_campos">
        <HttpsRoundedIcon className="login_iconos" />
        <input type="Password" placeholder="Confirmar Password" />
      </div>
      <button className="itemCount_btn_cart">Crear Usuario</button>
      <p onClick={change}>Ir a Iniciar Sesión</p>
    </>
  )
}

export default SignIn