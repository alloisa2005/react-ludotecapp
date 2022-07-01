
import React, { useContext } from 'react'
import { separadorMiles, tituloMayuscula } from '../../utilidades/Utilidades'
import './CartDetail.css'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartDetail({ item }) {
  const [cartList, setCartList, cantidadItems, clearCart, addCart, removeItem] = useContext(CartContext);

  return (
    <div className='cart_item_detail'>
        <div style={{ width:"25%"}}>
            <Link to={`/item/${item.id}`} className="a_per">
                <img src={item.img} alt={item.nombre} />
            </Link>
        </div>
        <div className="cart_item_detail_text">
            <h3>{item.nombre}</h3>
            <h4>Categoría: <span> { tituloMayuscula(item.categoria) } </span></h4>
            <h4>Precio Unitario: <span> $ { separadorMiles(item.precio) } </span></h4>
            <div className='cart_item_detail_cant'>
                <div className="cant_detail">
                    <button>-</button>
                    <p>{item.quantity}</p>
                    <button>+</button>
                </div>
                <DeleteOutlinedIcon className='cant_detail_icon' onClick={ () => removeItem(item.id)}/>
            </div>
        </div> 
        <h3 className='cart_item_price'>$ { separadorMiles(item.precio*item.quantity) }</h3>       
    </div>
  )
}

export default CartDetail