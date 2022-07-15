import React from "react";
import './NavBarR.css' 
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBarR() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark" id="miHeader">
      <div className="container">
        <Link className="navbar-brand navbar_logo" to={"/"}>
          <img className="nav__logo_img" src={logo} alt="Logo" />
          <h3 className="d-none d-sm-block">Ludotecapp</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav text-center d-sm-flex flex-sm-row justify-content-sm-around my-sm-2">
            <li className="nav-item mx-1">
              <Link to={'/'} className="nav-link titulos_navbar a_per">
                Inicio
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to={'/category/carta'} className="nav-link titulos_navbar a_per">
                Juegos de Carta
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to={'/category/tablero'} className="nav-link titulos_navbar a_per" href="./pages/compras.html">
              Juegos de Tablero
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to={'/category/accesorio'} className="nav-link titulos_navbar a_per" href="./pages/compras.html">
              Accesorios
              </Link>
            </li>
            <li className="nav-item mx-1">
                <CartWidget /> 
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarR;
