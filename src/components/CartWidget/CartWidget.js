import React from "react";

import "./CartWidget.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart" className="cart">
      <ShoppingCartIcon className="cart_icon" />
      <div className="cart_cant">
        <p>0</p>
      </div>
    </Link>
  );
}

export default CartWidget;
