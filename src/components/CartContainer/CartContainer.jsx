import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./CartContainer.css";

import { CartContext } from "../../context/CartContext";
import { separadorMiles } from "../../utilidades/Utilidades";

import CartDetail from "../CartDetail/CartDetail";

import FormCompra from "../FormCompra/FormCompra";
import NoProductModal from "../NoProductModal/NoProductModal";
import { updateStockJuego } from "../../firebase/firebaseFunciones";

function CartContainer() {
  const { cartList, clearCart, cantidadItems, montoTotalCart, iva, envio, total } = useContext(CartContext);

  const handleClearCarrito = () => {
    cartList.forEach(item => {      
      updateStockJuego(item.id, item.stock);
    })
    clearCart();
  }

  return (
    <>
      <div className="cartContainer_title">
          <div className="w-100 text-center text-sm-start">
            <h2>Mi Carrito ({cantidadItems()} {cantidadItems() > 1 ? "items" : "item"})
            </h2>        
          </div>

          <div className="w-100 d-flex justify-content-between justify-content-sm-end">
            <Link to={"/tienda"} className="a_per mx-sm-4">
              <h4 onClick={handleClearCarrito}>Seguir Comprando</h4>
            </Link>

            <h4 onClick={handleClearCarrito} className="vaciar_carrito">Vaciar Carrito</h4>            
          </div>       
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
            <img src={process.env.PUBLIC_URL+"assets/visa_logo.png"} alt="Visa Logo" />
            <img src={process.env.PUBLIC_URL+"assets/mastercard_logo.png"} alt="MasterCard Logo" />
            <img src={process.env.PUBLIC_URL+"assets/american_logo.png"} alt="American Logo" />
            <img src={process.env.PUBLIC_URL+"assets/diners_logo.jpg"} alt="Diners Logo" />
          </div>       

          <div className="botones_container">     
            { /* Llamo al formulario de compra (un modal) */
              cantidadItems() > 0 ? <FormCompra /> : <NoProductModal />
            }                   
            
            <Link to={'/'}>
              <button className="botones_container_btn btn_white">Seguir comprando</button>
            </Link>            
          </div>          

        </div>
      </div>
    </>
  );
}

export default CartContainer;
