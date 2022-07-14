import React, { useState, useContext } from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { UserContext } from "../../context/UserContext";
import { Alert, CircularProgress } from "@mui/material";


const initialError = {
  OK: false,
  desc: "",
};

function IniciarSesion({ change }) {

  const { loguearUsuario } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initialError);
  const [logueando, setLogueando] = useState(false);

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  }

  const handlerFocus = () => {
    setError(initialError);
  };

  const handlerInicioSesion = (e) => {     
    setLogueando(true);   
    loguearUsuario(email, password).then(res=> {
      setError(res);
      setLogueando(false);
    });
    
    setEmail("");    
    setPassword("");    
  }

  return (
    <>
    {error.desc !== "" ? (
        <Alert
          severity={error.OK ? "success" : "error"}
          style={{ height: "auto", marginBottom: "15px" }}
        >
          {error.desc}
        </Alert>
      ) : null}
      <div className="login_campos">
        <MailOutlineRoundedIcon className="login_iconos" />
        <input type="email" placeholder="E-mail" value={email} onChange={handlerEmail} onFocus={handlerFocus} />
      </div>
      <div className="login_campos">
        <HttpsRoundedIcon className="login_iconos" />
        <input type="Password" placeholder="Password" value={password} onChange={handlerPassword} onFocus={handlerFocus}/>
      </div>
      {
        logueando ? <CircularProgress /> : <button className="itemCount_btn_cart" onClick={handlerInicioSesion}>Iniciar Sesión</button>
      }
      <p onClick={change} >Crear Usuario</p>      
    </>
  );
}

export default IniciarSesion;
