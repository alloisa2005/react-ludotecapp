import React, { useContext } from "react";

import "./CartWidget.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  
  const { cantidadItems } = useContext(CartContext);

  /* const [cartList] = useCartContext(); */

  return (
    <Link to="/cart" className="nav-link titulos_navbar a_per">
      <div className="cart_cant">
        <ShoppingCartIcon className="cart_icon" />
        <p className="cart_icon_p">{cantidadItems()}</p>
      </div>
    </Link>
  );
}

export default CartWidget;
