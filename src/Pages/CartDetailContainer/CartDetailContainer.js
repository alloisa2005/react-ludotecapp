import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartDetail from "../../components/CartDetail/CartDetail";
import { CartContext } from "../../context/CartContext";

import "./CartDetailContainer.css";

function CartDetailContainer() {
  const [cartList, setCartList, cantidadItems] = useContext(CartContext);

  return (
    <div className="cartContainer">
      {cartList.length === 0 ? (
        <h2>No hay productos en el carrito</h2>
      ) : (
        <>
          <div className="cartContainer_title">
            <h2>
              Mi Carrito ({cantidadItems()}{" "}
              {cantidadItems() > 1 ? "items" : "item"})
            </h2>
            <Link to={"/"} className="a_per">
              {" "}
              <h4>Seguir Comprando</h4>{" "}
            </Link>
          </div>

          <div className="cartDetail_container">
            <div className="cartDetail_container_left">
              {cartList.map((item) => (
                <CartDetail item={item} />
              ))}
            </div>

            <div className="cartDetail_container_right">
              <h2>Resumen del Pedido</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDetailContainer;
