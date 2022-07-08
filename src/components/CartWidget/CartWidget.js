import React, { useContext } from "react";

import "./CartWidget.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  
  const { cantidadItems } = useContext(CartContext);

  /* const [cartList] = useCartContext(); */

  return (
    <Link to="/cart" className="cart">
      <ShoppingCartIcon className="cart_icon" />
      <div className="cart_cant">
        <p>{cantidadItems()}</p>
      </div>
    </Link>
  );
}

export default CartWidget;
