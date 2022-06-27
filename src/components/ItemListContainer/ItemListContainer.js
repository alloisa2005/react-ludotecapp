import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";


import ItemList from "../ItemList/ItemList";

import CircularProgress from "@mui/material/CircularProgress";
import {  
  getJuegos,  
  getJuegosPorCategoria  
} from "../../data/juegos";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {  

  const [juegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  

  console.log(isLoading);  

  let { tipo } = useParams();

  useEffect(() => {    
    setIsLoading(true);
    filtrarJuegos(tipo);  
  }, [tipo]);
  

  function filtrarJuegos(tipo) {
    if (tipo === undefined) {
      getJuegos().then((res) => {
        setJuegos(res);  
        setIsLoading(false);      
      });
    } else{
      getJuegosPorCategoria(tipo)
        .then((res) => {
          setJuegos(res);
          setIsLoading(false);
        });
    }
  };

  return (
    <section className="item_list_container">
      <h3 className="greeting">{greeting}</h3>

      {/* Lo comento por ahora */}
      {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd} /> */}

      {isLoading ? (
        <div className="loading_div">
          <CircularProgress className="loading" color="inherit" />
          <h3>Cargando...</h3>
        </div>
      ) : (
        <ItemList juegos={juegos} />
      )}
    </section>
  );
}

export default ItemListContainer;
