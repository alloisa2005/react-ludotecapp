import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './CartDetailContainer.css'

function CartDetailContainer() {

  const {cartList, setCartList} = useCartContext();

  return (
    <div className='cartContainer'>
        <h2>Mi Carrito {cartList.length}</h2>        
    </div>
  )
}

export default CartDetailContainer