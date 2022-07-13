import React, { useContext, useState } from 'react'
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { UserContext } from '../../context/UserContext';
import { Alert } from '@mui/material';

const initialError = {
  OK: false,
  desc: ''
}
function CrearUsuario({ change }) {

  const { user, crearUsuario } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [error, setError] = useState(initialError);

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlerPass = (e) => {
    setPass(e.target.value);
  }

  const handlerPassConf = (e) => {
    setPassConf(e.target.value);
  }

  const handlerFocus = () => {
    setError(initialError);
  }

  const handlerCrearUsuario = (e) => {  
    crearUsuario(email, pass)
      .then( res => setError(res));    

    setEmail("");    
    setPass("");
    setPassConf("");  
    //change();
  }

  return (
    <>
      {
        error.desc !== '' ? <Alert severity={error.OK ? "success" : "error"} style={{height:"auto", marginBottom:"15px"}}>{error.desc}</Alert> : null
      }
      <div className="login_campos">
        <MailOutlineRoundedIcon className="login_iconos" />
        <input type="mail" value={email} onChange={handlerEmail} onFocus={handlerFocus} placeholder="E-mail" />
      </div>
      <div className="login_campos">
        <HttpsRoundedIcon className="login_iconos" />
        <input type="Password" value={pass} onChange={handlerPass} onFocus={handlerFocus} placeholder="Password" />
      </div>
      <div className="login_campos">
        <HttpsRoundedIcon className="login_iconos" />
        <input type="Password" value={passConf} onChange={handlerPassConf} onFocus={handlerFocus} placeholder="Confirmar Password" />
      </div>
      <button onClick={handlerCrearUsuario} className="itemCount_btn_cart">Crear Usuario</button>
      <p onClick={change}>Ir a Iniciar Sesión</p>      
    </>
  )
}

export default CrearUsuario