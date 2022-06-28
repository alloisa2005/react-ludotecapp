
import "./ItemDetail.css";

import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// Componentes
import ItemCount from "../ItemCount/ItemCount";
import VideoContainer from "../VideoContainer/VideoContainer";
import ModalPre from "../Modal/ModalPre";

import { separadorMiles } from "../../utilidades/separadorMiles";

function ItemDetail({ juego }) {  

  function onAdd() {
    console.log("Agregar al carrito");
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
            <p className="item_right_precio">$ {separadorMiles(juego.precio)}</p>            

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

            <ItemCount stock={juego.stock} initial={1} onAdd={onAdd}  />            

            <div className="division"></div>

            <div className="icon_envio">
              <LocalShippingIcon className="icon_div_icon" />
              <p>Envío Gratis</p>
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
