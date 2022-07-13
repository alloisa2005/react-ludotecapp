import React, { useState } from 'react'
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

function CrearUsuario({ change }) {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlerPass = (e) => {
    setPass(e.target.value);
  }

  const handlerPassConf = (e) => {
    setPassConf(e.target.value);
  }

  const handlerCrearUsuario = (e) => {        
    setEmail("");    
    setPass("");
    setPassConf("");
    change();
  }

  return (
    <>
      <div className="login_campos">
        <MailOutlineRoundedIcon className="login_iconos" />
        <input type="mail" value={email} onChange={handlerEmail} placeholder="E-mail" />
      </div>
      <div className="login_campos">
        <HttpsRoundedIcon className="login_iconos" />
        <input type="Password" value={pass} onChange={handlerPass} placeholder="Password" />
      </div>
      <div className="login_campos">
        <HttpsRoundedIcon className="login_iconos" />
        <input type="Password" value={passConf} onChange={handlerPassConf} placeholder="Confirmar Password" />
      </div>
      <button onClick={handlerCrearUsuario} className="itemCount_btn_cart">Crear Usuario</button>
      <p onClick={change}>Ir a Iniciar Sesión</p>
    </>
  )
}

export default CrearUsuario