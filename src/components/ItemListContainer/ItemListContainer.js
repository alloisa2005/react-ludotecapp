import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import CircularProgress from "@mui/material/CircularProgress";
import { getJuegos, getJuegosPorCategoria  } from "../../data/juegos";
import { useParams } from "react-router-dom";

import { getAllJuegos } from "../../firebase/firebaseFunciones";

function ItemListContainer({ greeting }) {  

  const [juegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);    

  let { tipo } = useParams();

  useEffect(() => {    
    setIsLoading(true);    
    getAllJuegos()
      .then(juegos => {
        setJuegos(juegos);
        setIsLoading(false);
      });    
  }, [tipo]);    
  

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



/* Cosas Viejas que quité por FIREBASE

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
 */