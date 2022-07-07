import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import { getJuegosXId } from "../../firebase/firebaseFunciones";


function ItemDetailContainer() {
  const [juego, setJuego] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  let { id } = useParams();  

  useEffect(() => {

    getJuegosXId(id)
      .then(juego => {
        setJuego(juego);
        setIsLoading(false);
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
