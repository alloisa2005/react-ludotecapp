import React, { useRef, useState } from 'react'
import './EmptyCart.css'
import emptyCart from '../../images/emptyCart.png'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'


function EmptyCart() {  

  return (
    <div className='empty_container'>
        <div className='empty_container_img'>
          <img src={emptyCart} alt="ee" />
        </div>

        <div className='empty_container_cosas text-center'>
          <h1>Carrito Vacío</h1>
          <div className='container_botones_empty'>
            <Link to='/'>
              <button className='botones_container_btn btn_blue'>Inicio</button>
            </Link>     
            <div className='d-none d-sm-block' style={{width:"25px"}}></div>
            <Link to='/compras'>
              <button className='botones_container_btn btn_blue'>Mis Compras</button>
            </Link> 
          </div>      
        </div>                

    </div>
  )
}

export default EmptyCart