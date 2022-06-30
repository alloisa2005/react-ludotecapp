
import React, { useState, useEffect } from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom';

function ItemCount({stock, initial, onAdd}) {         

  const [count, setCount] = useState(initial);

  const [btnIncrement, setBtnIncrement] = useState(false);
  const [btnDecrement, setBtnDecrement] = useState(true);

  function restar() {
    if(count > 0) {
      setCount(count - 1);      
    }
  }
  function sumar() {
    if(stock > count) {
      setCount(count + 1);
    }
  }

  useEffect(() => {

    (count === stock) ? setBtnIncrement(true) : setBtnIncrement(false);
    
    (count === 0) ? setBtnDecrement(true) : setBtnDecrement(false);
    
  }, [count]);

  return (
    <div className='itemCount_container'>        
        <div className="itemCount_controles">
            <button onClick={restar} className="itemCount_controles_button" disabled={btnDecrement}>-</button>
            <p>{count}</p>
            <button onClick={sumar} className="itemCount_controles_button" disabled={btnIncrement}>+</button>
        </div>
        <p className='itemCount_unidades'>Unidades disponibles: <span>{stock-count}</span></p>
        
        <div className="buttons_container">
          <button onClick={ () => onAdd(count)} className='itemCount_btn_cart'>Agregar al Carrito</button>
          <Link to='/cart'>
            <button className='itemCount_btn_cart'>Ir al Carrito</button>
          </Link>
        </div>
    </div>
  )
}

export default ItemCount;