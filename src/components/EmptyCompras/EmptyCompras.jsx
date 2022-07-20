import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCompras.css";

function EmptyCompras() {
  return (
    <div className="compras_noItem">
      <img src={"./assets/no_buy.png"}  alt="Sin Compras Img" />
      <h1>No ha realizado compras</h1>
      <Link to="/">
        <button className="itemCount_btn_cart">Inicio</button>
      </Link>       
    </div>
  );
}

export default EmptyCompras;
