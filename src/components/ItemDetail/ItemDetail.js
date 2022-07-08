
import "./ItemDetail.css";

import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// Componentes
import ItemCount from "../ItemCount/ItemCount";
import VideoContainer from "../VideoContainer/VideoContainer";
import ModalPre from "../Modal/ModalPre";

import { separadorMiles } from "../../utilidades/Utilidades";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { updateStockJuego } from "../../firebase/firebaseFunciones";

function ItemDetail({ juego }) {  

  const [stockJuego, setStockJuego] = useState(juego.stock);

  const { addCart } = useContext(CartContext);

  function onAdd(cant) {      
    addCart(juego, cant);    

    // Cuando se agregan juegos al carro actualizo el stock
    updateStockJuego(juego.id, (juego.stock - cant));
    setStockJuego(juego.stock - cant);
  }

  return (
    <>
      {juego.categoria === 'accesorio' ? null :
        <div className="img_portada">
          <img src={juego.img_portada} alt={juego.nombre}/>
          <div className="degradado"></div>
        </div>
      }      

      <div className="item_detail">        
        <h1>{juego.nombre}</h1>

        <div className="item_detail_container">
          <div className="item_left">
            <ModalPre img={juego.img} />                        
          </div>
          <div className="item_right">
            <p className="item_right_disp">
              Disponibilidad:
              <span> {juego.stock > 0 ? "Disponible" : "Sin stock"} </span>
            </p>
            <p className="item_right_precio">$ {separadorMiles(juego.precio)} <span className="item_right_precio_span">(no incluye IVA)</span></p>            

            {juego.categoria === 'accesorio' ? null :
              <div className="item_right_iconos">
              <div className="icon_div">
                <PeopleRoundedIcon className="icon_div_icon" />
                <p>
                  {juego.jug_min} - {juego.jug_max}
                </p>
              </div>

              <div className="icon_div">
                <PersonRoundedIcon className="icon_div_icon" />
                <p>{juego.edad}</p>
              </div>

              <div className="icon_div">
                <AccessTimeRoundedIcon className="icon_div_icon" />
                <p>{juego.tiempo}</p>
              </div>
            </div>
            }

            <div className="division"></div>

            <ItemCount stock={stockJuego} initial={0} onAdd={onAdd}  />            

            <div className="division"></div>

            <div className="icon_envio">
              <LocalShippingIcon className="icon_div_icon" />
              <p>Envíos a domicilio</p>
            </div>
          </div>
        </div>

        <div className="division"></div>

        <div className="item_detail_game">
          <h2 className="item_detail_subtitle">Sinopsis</h2>
          <div className="item_detail_game_desc">
            <p>{juego.descripcion}</p>
          </div>
        </div>

        <div className="division"></div>

        <div className="item_detail_game">
          <h2 className="item_detail_subtitle">¿Cómo Jugar?</h2>        
          <VideoContainer source={juego.yt} />  
        </div>

      </div>
    </>
  );
}

export default ItemDetail;
