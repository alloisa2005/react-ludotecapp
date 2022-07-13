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

    <div className="footer_center">
      <FacebookIcon className="footer__icon" />
      <InstagramIcon className="footer__icon" />      
      <WhatsAppIcon className="footer__icon" /> 
    </div>

    <div className="footer_right">
      <h3>Sitio por Aa</h3>
      <InstagramIcon className="footer__icon" />
    </div>

  </footer>
  );
}

export default Footer;
