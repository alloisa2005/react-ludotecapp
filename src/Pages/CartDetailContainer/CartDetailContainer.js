import React, { useContext } from 'react'
import CartDetail from '../../components/CartDetail/CartDetail';
import { CartContext } from '../../context/CartContext';

import './CartDetailContainer.css'

function CartDetailContainer() {

  const [ cartList, setCartList, cantidadItems ] = useContext(CartContext);

  return (
    <div className='cartContainer'>
        <h2>Mi Carrito ({cantidadItems()} items)</h2>    
        <div className='cartDetail_container'>
          {cartList.map( item => (          
            <CartDetail item={ item } /> 
          ))} 
        </div>   
    </div>
  )
}

export default CartDetailContainer