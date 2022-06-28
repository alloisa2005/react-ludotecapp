import React from "react";

import "./NavBar.css";

import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

// Componentes
import CartWidget from "../CartWidget/CartWidget";
/* import SearchIcon from '@mui/icons-material/Search'; */

function NavBar({onChangeInput}) {   

  return (    
    <header className="header"> 

      <Link to="/" className="header__left">
        <img src={logo} alt="Ludotecapp Logo" className="header__logo" />
        <h3>Ludotecapp</h3>        
      </Link>      

      {/* <div className="buscar_container">
        <input className="buscar__input" type="text" placeholder="Buscar..." onChange={onChangeInput}/>     
        <SearchIcon className="buscar__icon" />     
      </div> */}
      

      <nav className="header__right">
        <ul>
        <Link to={ "/" } className="li_item">Inicio</Link>
          <Link to={ "/category/carta" } className="li_item">Juegos de Cartas</Link>
          <Link to={ "/category/tablero" } className="li_item">Juegos de Tablero</Link>          
          <Link to={ "/category/accesorio" } className="li_item">Accesorios</Link>                    

          <CartWidget />          
        </ul>
      </nav>

    </header>
  );
}

export default NavBar;

