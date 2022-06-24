import React, { useContext, useEffect, useState } from "react";
import "./ItemListContainer.css";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

import CircularProgress from "@mui/material/CircularProgress";
import {
  getAccesorios,
  getJuegos,
  getJuegosCartas,
  getJuegosTablero,
} from "../../data/juegos";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  //const [initial, setInitial] = useState(1);
  //let stock = 5;
  /* function onAdd() {   
    alert(`Producto agregado al carrito`);
    console.log('Producto agregado al Carrito'); 
  }   */

  /* const [users, setUsers] = useState([]); */
  /* let url = "https://randomuser.me/api/?results=16"; */

  const [juegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  

  console.log(isLoading);  

  let { tipo } = useParams();

  useEffect(() => {
    /* setTimeout(() => {      
      setIsLoading(true);
      filtrarJuegos(tipo);            
    }, 2000); */
    setIsLoading(true);
    filtrarJuegos(tipo);  

  }, [tipo]);
  

  const filtrarJuegos = (tipo) => {
    if (tipo === undefined) {
      getJuegos().then((res) => {
        setJuegos(res);  
        setIsLoading(false);      
      });
    } else if (tipo === "carta") {
      getJuegosCartas().then((res) => {
        setJuegos(res);              
        setIsLoading(false);
      });
    } else if (tipo === "tablero") {
      getJuegosTablero().then((res) => {        
        setJuegos(res);       
        setIsLoading(false);   
      });
    } else {
      getAccesorios()
        .then((res) => {
          setIsLoading(false);
          setJuegos(res);
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
