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
    if (stockJuego > 0 ) {  /* item.quantity */
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
    <div className="cartItem_container">
      <div className="cartItem_left">
        <Link to={`/item/${item.id}`} className="a_per">
          <img className="cartItem_img" src={item.img} alt={item.nombre} />
        </Link>
        <div className="cartItem_right">
          <p className="cartItem_right_title">{item.nombre}</p> 
          <p className="cartItem_right_cat">Categoría: <span>{tituloMayuscula( item.categoria )}</span></p>

          <div className="div_precios">
            <p className="cartItem_right_price">Precio ($): <span>{ separadorMiles( item.precio )}</span></p>
            <p className="cartItem_right_cant">Cantidad: <span>{ item.quantity }</span></p>
          </div>

          <p className="cartItem_right_sbt">SubTotal ($): <span>{ separadorMiles( item.precio*item.quantity)}</span></p>
        </div>
      </div>

      <div className="cartItem_cantidades">
        <div className="cant_detail">
          <button onClick={restarItem}>-</button>
          <p>{item.quantity}</p>
          <button onClick={sumarItem}>+</button>
        </div>
        <p className="cartItem_cantidades_stock">Stock: {stockJuego} {stockJuego > 1 ? 'uds.':'ud.'}</p>
        <DeleteOutlinedIcon 
            className="cant_detail_icon"
            onClick={handlerDeleteBtn}
          />
      </div>

    </div>
  );
}

export default CartDetail;


/*
<div className="cart_item_detail">
      <div style={{ width: "100%" }}>
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
          <DeleteOutlinedIcon style={{marginRight:17}}
            className="cant_detail_icon"
            onClick={handlerDeleteBtn}
          />
          <p>Stock: {stockJuego} {stockJuego > 1 ? 'uds.':'ud.'}</p>
        </div>
      </div>
      <h3 className="cart_item_price">
        $ {separadorMiles(item.precio * item.quantity)}
      </h3>
    </div>
*/