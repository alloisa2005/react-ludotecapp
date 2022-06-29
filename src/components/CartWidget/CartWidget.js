import React from "react";

import "./CartWidget.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function CartWidget() {
  
  const { cartList } = useCartContext();

  return (
    <Link to="/cart" className="cart">
      <ShoppingCartIcon className="cart_icon" />
      <div className="cart_cant">
        <p>{cartList.length}</p>
      </div>
    </Link>
  );
}

export default CartWidget;
