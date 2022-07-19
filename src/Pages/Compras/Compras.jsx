import React, { useState, useEffect } from "react";
import "./Compras.css";
import EmptyCompras from "../../components/EmptyCompras/EmptyCompras";
import { getAllCompras, getComprasEntreFechas } from "../../firebase/firebaseFunciones";
import Spinner from "../../components/Spinner/Spinner";
import CompraItem from "../../components/CompraItem/CompraItem";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

let fchInicial = new Date();

function Compras() {
  const [compras, setCompras] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroFecha, setFiltroFecha] = useState('D');  // Inicializo en "D"escendente  

  const [fchDesde, setFchDesde] = useState(fchInicial);
  const [fchHasta, setFchHasta] = useState(fchInicial);

  const handlerFchDesde = (e) => setFchDesde(e.target.value);
  const handlerFchHasta = (e) => setFchHasta(e.target.value);

  const handlerChange = (e) => {    
    setFiltroFecha(e.target.value);
  }

  const buscarEntreFechas = () => {
    setCargando(true);
    getComprasEntreFechas(fchDesde, fchHasta)
      .then( res => {
        setCompras(res);
        setCargando(false);
      });
  }
  

  useEffect(() => {    
    setCargando(true);
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
            <div className="mt-2 d-none d-sm-flex compras_filtros_fechas">
              <h3>Fch Desde</h3>
              <input type="date" className="fecha_desde" value={fchDesde} onChange={handlerFchDesde} />
              <h3>Fch Hasta</h3>
              <input type="date" className="fecha_hasta" value={fchHasta} onChange={handlerFchHasta} min={fchDesde}/>
              <SearchRoundedIcon className="compras_search_icon" onClick={buscarEntreFechas} />
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