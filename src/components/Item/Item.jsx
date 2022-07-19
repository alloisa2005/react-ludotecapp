import React from 'react'
import { Link } from 'react-router-dom'
import { separadorMiles } from '../../utilidades/Utilidades'
import './Item.css'

function Item({ juego }) {    

  return (
    <Link to={`/item/${juego.id}`} className='item_card'>        
        <img className='item_card_img' src={juego.img} alt='User Avatar'/>                            
        <p className='item_card_text'>{juego.nombre}</p>
        <p className='item_card_text'>$ {separadorMiles(juego.precio)}</p>        
    </Link>
  )
}

export default Item