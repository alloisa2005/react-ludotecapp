import React from 'react'
import Carrusel from './Carrusel'

import './Home.css'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home_container'>
        <Carrusel />

        <div className='home_title'>
            <h2>Tu Ludoteca al alcance de un click</h2>        
            <p>Nos encantan los Juegos de Mesa y ahora más que nunca tenemos muchos donde elegir. Si estas cansado de los típicos juegos acá vas a encontrar de tooodo para divertirte.
            ¡Bienvenidos a nuestra tienda!. La mejor alternativa en Juegos de Mesa y Tablero. Hacemos envíos a todo Uruguay y te orientamos en tu compra.</p>
        </div>
        
        <div className='home_boton'>
            <Link to='/'>
              <button className='botones_container_btn btn_blue'>Ir a la Tienda</button>
            </Link> 
        </div>

        <div className='home_caracteristicas'>
            <div className='home_car_detail'>
                <LocalOfferOutlinedIcon className='home_car_detail_icon'/>
                <h4>Grandes Ofertas</h4>
                <p>En Ludotecapp te ofrecemos las mejores ofertas en juegos de mesa, precios increíbles en títulos únicos y exclusivos, con todos los métodos de pago.</p>
            </div>
            <div className='home_car_detail'>
                <StarBorderPurple500OutlinedIcon className='home_car_detail_icon' />
                <h4>Novedades Exclusivas</h4>
                <p>Solo aquí encontrarás novedades únicas y exclusivas en juegos de mesa importados de las mejores y más reconocidas editoriales.</p>
            </div>
            <div className='home_car_detail'>
                <LocalShippingOutlinedIcon className='home_car_detail_icon' />
                <h4>Envíos Rápidos</h4>
                <p>Te ofrecemos envíos rápidos y seguros, en tiempos record, a todo el país y con los costos de envío mas bajo que puedas encontrar.</p>
            </div>
        </div>

        <div className='home_redes'>
            <FacebookIcon className='home_car_detail_icon'/>
            <InstagramIcon className='home_car_detail_icon'/>
            <WhatsAppIcon className='home_car_detail_icon'/>
        </div>
    </div>
  )
}

export default Home