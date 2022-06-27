import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getProductoById } from "../../data/juegos";
import { CircularProgress } from "@mui/material";

import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [juego, setJuego] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  let { id } = useParams();

  useEffect(() => {
    getProductoById(id)
      .then((res) => {
        setJuego(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading_div" style={{ display: "grid", placeItems: "center" }}>
          <CircularProgress className="loading" color="inherit" />          
        </div>
      ) : (
        <ItemDetail juego={juego} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
