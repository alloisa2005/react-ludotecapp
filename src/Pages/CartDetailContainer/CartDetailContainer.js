import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartDetail from '../../components/CartDetail/CartDetail';
import { CartContext } from '../../context/CartContext';

import './CartDetailContainer.css'

function CartDetailContainer() {

  const [ cartList, setCartList, cantidadItems ] = useContext(CartContext);

  return (
    <div className='cartContainer'>

        <div className='cartContainer_title'>
          <h2>Mi Carrito ({cantidadItems()} items)</h2>    
          <Link to={'/'} className="a_per"> <h4>Seguir Comprando</h4> </Link>
        </div>
        
        <div className='cartDetail_container'>
          {cartList.map( item => (          
            <CartDetail item={ item } /> 
          ))} 
        </div>   
    </div>
  )
}

export default CartDetailContainer