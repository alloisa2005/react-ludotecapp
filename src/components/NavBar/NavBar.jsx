import React, { useState } from "react";

import "./NavBar.css";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {

  const [active, setActive] = useState(false);
   
  const changeActive = ()=>{
    setActive(!active);
  }

  return (
    <nav className="nav__wrapper">
      <Link to={'/'} className="li_item nav__logo">
        <img src={"./assets/logo.png"}  alt="logo" />  
        <h3>Ludotecapp</h3> 
      </Link>

      <ul onClick={changeActive} className={ active ? "nav__items active" : "nav__items"}>
        <Link to={'/'} className="li_item">Home</Link>
        <Link to={'/category/carta'} className="li_item">Juegos de Carta</Link>
        <Link to={'/category/tablero'} className="li_item">Juegos de Tablero</Link>
        <Link to={'/category/accesorio'} className="li_item">Accesorios</Link>
        <Link to={'/compras'} className="li_item">Compras</Link>
        <CartWidget />        
      </ul>

      <MenuIcon className="menu_icon" onClick={ changeActive }/>
    </nav>
  );
}

export default NavBar;
