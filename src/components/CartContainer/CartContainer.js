import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { separadorMiles } from "../../utilidades/Utilidades";
import CartDetail from "../CartDetail/CartDetail";
import "./CartContainer.css";

function CartContainer() {
  const [cartList, setCartList, cantidadItems, clearCart, addCart, removeItem, montoTotalCart, iva, envio] = useContext(CartContext);

  return (
    <>
      <div className="cartContainer_title">
        <h2>
          Mi Carrito ({cantidadItems()} {cantidadItems() > 1 ? "items" : "item"}
          )
        </h2>
        <Link to={"/"} className="a_per">
          <h4>Seguir Comprando</h4>{" "}
        </Link>
      </div>

      <div className="cartDetail_container">
        <div className="cartDetail_container_left">
          {cartList.map((item) => (
            <CartDetail key={item.id} item={item} />
          ))}
        </div>

        <div className="cartDetail_container_right">
          <h2>Resumen del Pedido</h2>
          <h3>SubTotal ($): <span>{separadorMiles( montoTotalCart() )}</span></h3>
          <h3>IVA ($): <span>{separadorMiles( iva() )}</span></h3>
          <h3>Envío ($): <span>{separadorMiles( envio() )}</span></h3>
        </div>
      </div>
    </>
  );
}

export default CartContainer;
