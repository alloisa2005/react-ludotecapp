import React from "react";

import "./NavBar.css";

import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

// Componentes
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {  
 
  let cat_cartas = "carta";
  let cat_tablero = "tablero";
  let cat_accesorio = "accesorio";

  return (    
    <header className="header"> 

      <Link to="/" className="header__left">
        <img src={logo} alt="Ludotecapp Logo" className="header__logo" />
        <h3>Ludotecapp</h3>
      </Link>      

      <nav className="header__right">
        <ul>
          <Link to={ `/category/${cat_cartas}` } className="li_item">Juegos de Cartas</Link>
          <Link to={ `/category/${cat_tablero}` } className="li_item">Juegos de Tablero</Link>          
          <Link to={ `/category/${cat_accesorio}` } className="li_item">Accesorios</Link>                    

          <CartWidget />          
        </ul>
      </nav>

    </header>
  );
}

export default NavBar;

