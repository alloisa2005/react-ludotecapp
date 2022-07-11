import React, { useState, useEffect } from "react";
import "./Compras.css";
import EmptyCompras from "../../components/EmptyCompras/EmptyCompras";
import { getAllCompras } from "../../firebase/firebaseFunciones";
import Spinner from "../../components/Spinner/Spinner";
import CompraItem from "../../components/CompraItem/CompraItem";

function Compras() {
  const [compras, setCompras] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getAllCompras().then((res) => {
      setCompras(res);
      setCargando(false);
    });
  }, []);

  return (
    <div className="compras_container">
      {cargando ? (
        <Spinner /> // Si esta cargando muestra el spinner
      ) : compras.length === 0 ? (
        <EmptyCompras /> // Si no hay compras muestra el componente vacio
      ) : (
        <>
          <h2>Mis Compras</h2>
          <div className="compras_filtros">
            <h3>Buscar</h3>
          </div>
          {compras.map((compra) => (
            <CompraItem key={compra.id} compra={compra} />
          ))}
        </>
      )}
    </div>
  );
}

export default Compras;

/* <>
  <h2>Mis Compras</h2>
  <div className="compras_filtros">
    <h3>Filtros de Búsqueda</h3>
  </div>
  <div className="compras_listado">
    <h3>sdsd</h3>
  </div>
</> */
