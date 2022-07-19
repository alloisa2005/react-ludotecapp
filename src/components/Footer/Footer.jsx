import React from "react";

/* CSS */
import "./Footer.css";

/* Iconos */
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {

  let anio = new Date().getFullYear();

  return (
  <footer className="footer">
    
    <div className="footer__left">
      <h3>Ludotecapp &copy; {anio}</h3>
    </div>    

    <div className="footer_right">
      <h4>Sitio por Aa</h4>
      <InstagramIcon className="footer__icon" />
    </div>

  </footer>
  );
}

export default Footer;
