import React, { useState, useEffect } from "react";
import "./Compras.css";
import EmptyCompras from "../../components/EmptyCompras/EmptyCompras";
import { getAllCompras } from "../../firebase/firebaseFunciones";
import Spinner from "../../components/Spinner/Spinner";
import CompraItem from "../../components/CompraItem/CompraItem";

let fchInicial = new Date();

function Compras() {

  const [compras, setCompras] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroFecha, setFiltroFecha] = useState('D');  // Inicializo en "D"escendente  

  const [fchDesde, setFchDesde] = useState(fchInicial);
  const [fchHasta, setFchHasta] = useState(fchInicial);

  const handlerChange = (e) => {    
    setFiltroFecha(e.target.value);
  }

  useEffect(() => {    
    getAllCompras(filtroFecha).then((res) => {
      setCompras(res);
      setCargando(false);
    });
  }, [filtroFecha]);      

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

            <h3>Filtros</h3>

            <div className="compras_filtros_select">
              <h3>Fecha</h3>
              <select name="fecha_sel" id="fecha_sel" onChange={handlerChange}>
                <option value="D">Descendente</option>
                <option value="A">Ascendente</option>
              </select>
            </div>  

            <div style={{display:"flex"}}>
              <div style={{display:"flex", marginRight:"35px"}}>
                <h3 style={{marginRight:"10px"}}>Fecha Desde</h3>
                <input type="date" />
              </div>
              <div style={{display:"flex"}}>
                <h3 style={{marginRight:"10px"}}>Fecha Hasta</h3>
                <input type="date" />
              </div>              
            </div>
          </div>

          {compras.map((compra, index) => (
            <CompraItem key={index} compra={compra} />            
          ))}
        </>
      )}
    </div>
  );
}

export default Compras;