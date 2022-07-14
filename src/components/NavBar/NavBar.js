import React, { useContext } from "react";

import "./NavBar.css";

import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

// Componentes
import CartWidget from "../CartWidget/CartWidget";
import { UserContext } from "../../context/UserContext";

import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function NavBar() {
  const { user, cerrarSesion } = useContext(UserContext);

  const handlerCierreSesion = () => {
    cerrarSesion();      
  };

  return (
    <header className="header">
      <Link to="/" className="header__left">
        <img src={logo} alt="Ludotecapp Logo" className="header__logo" />
        <h3>Ludotecapp</h3>
      </Link>

      <nav className="header__right">
        <ul>
          <Link to={"/"} className="li_item">
            Inicio
          </Link>
          <Link to={"/category/carta"} className="li_item">
            Juegos de Cartas
          </Link>
          <Link to={"/category/tablero"} className="li_item">
            Juegos de Tablero
          </Link>
          <Link to={"/category/accesorio"} className="li_item">
            Accesorios
          </Link>

          {user?.email ? (
            <div onClick={handlerCierreSesion} className="nav_login_container">
              <LogoutRoundedIcon className="nav_login_icon" />
              <p className="mr nav_login_texto">Log Out</p>
            </div>
          ) : (
            <Link to={"/login"} className="li_item">
              <div className="nav_login_container">
                <LoginRoundedIcon className="nav_login_icon" />
                <p className="nav_login_texto">Log In</p>
              </div>
            </Link>
          )}

          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
