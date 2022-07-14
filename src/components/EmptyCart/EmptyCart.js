import React from 'react'
import './EmptyCart.css'
import emptyCart from '../../images/emptyCart.png'
import { Link } from 'react-router-dom'


function EmptyCart() {  

  //let dd = parseInt((new Date('2012/12/31').getTime() / 1000).toFixed(0))

  return (
    <div className='empty_container'>
        <div className='empty_container_img'>
          <img src={emptyCart} alt="ee" />
        </div>
        
        <div className='empty_container_cosas'>
          <h1>Carrito Vacío</h1>
          <Link to='/' style={{marginRight:"20px"}}>
            <button className='itemCount_btn_cart'>Inicio</button>
          </Link>  
          <Link to='/compras'>
            <button className='itemCount_btn_cart'>Historial de Compras</button>
          </Link>           
        </div>                

    </div>
  )
}

export default EmptyCart