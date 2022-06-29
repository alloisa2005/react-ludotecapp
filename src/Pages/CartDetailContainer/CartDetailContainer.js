import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

import './CartDetailContainer.css'

function CartDetailContainer() {

  const [ cartList, setCartList, cantidadItems ] = useContext(CartContext);

  return (
    <div className='cartContainer'>
        <h2>Mi Carrito {cantidadItems()}</h2>        
    </div>
  )
}

export default CartDetailContainer