import React, { useState } from "react";
import "./Compras.css";
import EmptyCompras from "../../components/EmptyCompras/EmptyCompras";

function Compras() {
  const [cargando, setCargando] = useState(true);

  let compras = true;

  return (
    <div className="compras_container">
      {!compras ? 
        <EmptyCompras />
      : (
        <>
          <h2>Mis Compras</h2>
          <div className="compras_filtros">
            <h3>Filtros de Búsqueda</h3>
          </div>
          <div className="compras_listado">
            <h3>sdsd</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Compras;
