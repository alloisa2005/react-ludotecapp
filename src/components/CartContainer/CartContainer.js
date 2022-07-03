import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { separadorMiles } from "../../utilidades/Utilidades";
import CartDetail from "../CartDetail/CartDetail";
import "./CartContainer.css";
import visa from '../../images/visa_logo.png'
import mastercard from '../../images/mastercard_logo.png'
import american from '../../images/american_logo.png'
import diners from '../../images/diners_logo.jpg'

function CartContainer() {
  const [cartList, setCartList, cantidadItems, clearCart, addCart, removeItem, montoTotalCart, iva, envio, total ] = useContext(CartContext);

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

          <div className="cartDetail_container_right_section">
            <h3>SubTotal ($):</h3>
            <p>{separadorMiles( montoTotalCart() )}</p>  
          </div>
          
          <div className="cartDetail_container_right_section">
            <h3>IVA - 20% ($):</h3>
            <p>{separadorMiles( iva() )}</p>  
          </div>
          
          <div className="cartDetail_container_right_section">
            <h3>Envío ($):</h3>
            <p>{separadorMiles( envio() )}</p>  
          </div>
          
          <div className="cartDetail_container_right_section_total">
            <h3>TOTAL ($):</h3>
            <p>{separadorMiles( total() )}</p>  
          </div> 

          <div className="cartDetail_container_right_section_logos">
            <img src={visa} alt="Visa Logo" />
            <img src={mastercard} alt="MasterCard Logo" />
            <img src={american} alt="American Logo" />
            <img src={diners} alt="Diners Logo" />
          </div>       

          <div className="botones_container">
            <button className="botones_container_btn btn_blue">Finalizar Compra</button>
            <Link to={'/'}>
              <button className="botones_container_btn btn_white">Seguir Comprando</button>
            </Link>            
          </div>          

        </div>
      </div>
    </>
  );
}

export default CartContainer;
