import React, { useState, useEffect } from "react";
import "./Compras.css";
import EmptyCompras from "../../components/EmptyCompras/EmptyCompras";
import { getAllCompras } from "../../firebase/firebaseFunciones";
import Spinner from "../../components/Spinner/Spinner";
import CompraItem from "../../components/CompraItem/CompraItem";


function Compras() {
  const [compras, setCompras] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroFecha, setFiltroFecha] = useState('D');  // Inicializo en "D"escendente  

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
          <h2>Historial de Compras</h2>          
          <div className="compras_filtros">
            <div className="compras_filtros_select">
              <h3>Fecha</h3>
              <select name="fecha_sel" id="fecha_sel" onChange={handlerChange}>
                <option value="D">Descendente</option>
                <option value="A">Ascendente</option>
              </select>
            </div>                      
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