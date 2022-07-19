import React, { useContext } from "react";

import CartContainer from "../../components/CartContainer/CartContainer";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { CartContext } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
  const { cartList } = useContext(CartContext);

  return (
    <div className="cartContainer">

      {/* Si el carrito está vacío, muestro el componente EmptyCart, sino el componente CartContainer */}
      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartContainer />
      )}
      
    </div>
  );
}

export default Cart;
