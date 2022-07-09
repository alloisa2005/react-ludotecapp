import React, { useContext } from "react";

import "./NavBar.css";

import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

// Componentes
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../context/CartContext";


function NavBar() {   

  const { cantidadItems } = useContext(CartContext);

  return (    
    <header className="header"> 

      <Link to="/" className="header__left">
        <img src={logo} alt="Ludotecapp Logo" className="header__logo" />
        <h3>Ludotecapp</h3>        
      </Link>                  

      <nav className="header__right">
        <ul>
        
          <Link to={ "/" } className="li_item">Inicio</Link>
          <Link to={ "/category/carta" } className="li_item">Juegos de Cartas</Link>
          <Link to={ "/category/tablero" } className="li_item">Juegos de Tablero</Link>          
          <Link to={ "/category/accesorio" } className="li_item">Accesorios</Link>                    
          {/* <Link to={ "/compras" } className="li_item">Mis Compras</Link>   */}

          {
            // Si la cantidad de elementos en el carrito es nula, oculto el icono del carrito
            cantidadItems() > 0 ? <CartWidget /> : null        
          }          
          
        </ul>
      </nav>

    </header>
  );
}

export default NavBar;

