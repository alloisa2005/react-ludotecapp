import React, { useState, useEffect, useContext } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const [btnIncrement, setBtnIncrement] = useState(false);
  const [btnDecrement, setBtnDecrement] = useState(true);

  const [cartList, setCartList, cantidadItems] = useContext(CartContext);

  function restar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function sumar() {
    if (stock > count) {
      setCount(count + 1);
    }
  }

  useEffect(() => {
    count === stock ? setBtnIncrement(true) : setBtnIncrement(false);

    count === 0 ? setBtnDecrement(true) : setBtnDecrement(false);
  }, [count]);

  return (
    <div className="itemCount_container">
      <div className="itemCount_controles">
        <button
          onClick={restar}
          className="itemCount_controles_button"
          disabled={btnDecrement}
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={sumar}
          className="itemCount_controles_button"
          disabled={btnIncrement}
        >
          +
        </button>
      </div>
      <p className="itemCount_unidades">
        Unidades disponibles: <span>{stock - count}</span>
      </p>

      <div className="buttons_container">
        <button onClick={() => onAdd(count)} className="itemCount_btn_cart">
          Agregar al Carrito
        </button>

        {/* Si el carrito está vacío oculo el botón de "Ir al Carrito", de lo contrario lo muestro */}
        {cantidadItems() === 0 ? null : (
          <Link to="/cart">
            <button className="itemCount_btn_cart">Ir al Carrito</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemCount;
