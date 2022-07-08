import React, { useContext, useEffect, useState } from "react";
import { separadorMiles, tituloMayuscula } from "../../utilidades/Utilidades";
import "./CartDetail.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { getJuegosXId, updateStockJuego } from "../../firebase/firebaseFunciones";

function CartDetail({ item }) {
  const { addCart, removeItem } = useContext(CartContext);

  const [stockJuego, setStockJuego] = useState(item.stock); 
  
  useEffect(() => {
    // Cuando el componente se monta, obtengo el juego de la base de datos (el stock) y lo guardo en el state stockJuego
    getJuegosXId(item.id).then(juego => setStockJuego(juego.stock));          
  },[])

  const sumarItem = () => {
    // Añado items mientras haya en stock de ese producto
    if (stockJuego > item.quantity) {
      addCart(item, 1);
      
      // Actualizo el stock del juego en la base de datos
      updateStockJuego(item.id, (stockJuego - 1));
      setStockJuego( stockJuego - 1 );
    }
  };

  const restarItem = () => {
    if (item.quantity > 0) {
      addCart(item, -1);
      
      // Actualizo el stock del juego en la base de datos
      updateStockJuego(item.id, (stockJuego + 1));
      setStockJuego( stockJuego + 1 );
    }
  };

  function handlerDeleteBtn(){    
    updateStockJuego(item.id, (item.quantity + stockJuego));    
    removeItem(item.id);
  }

  return (
    <div className="cart_item_detail">
      <div style={{ width: "25%" }}>
        <Link to={`/item/${item.id}`} className="a_per">
          <img src={item.img} alt={item.nombre} />
        </Link>
      </div>
      <div className="cart_item_detail_text">
        <h3>{item.nombre}</h3>
        <h4>
          Categoría: <span> {tituloMayuscula(item.categoria)} </span>
        </h4>
        <h4>
          Precio Unitario: <span> $ {separadorMiles(item.precio)} </span>
        </h4>
        <div className="cart_item_detail_cant">
          <div className="cant_detail">
            <button onClick={restarItem}>-</button>
            <p>{item.quantity}</p>
            <button onClick={sumarItem}>+</button>
          </div>
          <DeleteOutlinedIcon
            className="cant_detail_icon"
            onClick={handlerDeleteBtn}
          />
          <p>{stockJuego}</p>
        </div>
      </div>
      <h3 className="cart_item_price">
        $ {separadorMiles(item.precio * item.quantity)}
      </h3>
    </div>
  );
}

export default CartDetail;
