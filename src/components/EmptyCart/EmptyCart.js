import React, { useRef, useState } from 'react'
import './EmptyCart.css'
import emptyCart from '../../images/emptyCart.png'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'


function EmptyCart() {

  const [nombre, setNombre] = useState('');

  const nombreRef = useRef('');
  const changeName = () => {
    setNombre(nombreRef.current.value);
  }

  return (
    <div className='empty_container'>
        <div className='empty_container_img'>
          <img src={emptyCart} alt="ee" />
        </div>

        <div className='empty_container_cosas'>
          <h1>Carrito Vacío</h1>
          <Link to='/'>
            <button className='itemCount_btn_cart'>Inicio</button>
          </Link>            
        </div>                

    </div>
  )
}

export default EmptyCart