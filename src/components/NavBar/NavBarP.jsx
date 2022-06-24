import React, { useState } from "react";
import logo from "../images/logo.png";

import "../css/NavBarP.css";

import MenuIcon from "@mui/icons-material/Menu";

function NavBarP() {

  const [active, setActive] = useState(false);
   
  const changeActive = ()=>{
    setActive(!active);
  }

  return (
    <nav className="nav__wrapper">
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className={ active ? "nav__items active" : "nav__items"}>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>

      <MenuIcon className="menu_icon" onClick={ changeActive }/>
    </nav>
  );
}

export default NavBarP;
