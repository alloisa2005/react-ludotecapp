import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CartContext } from '../../context/CartContext';
import { Divider } from '@mui/material';

export default function Acordeon() {

  const [cartList, setCartList, cantidadItems, clearCart, addCart, removeItem, montoTotalCart, iva, envio, total ] = useContext(CartContext);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>Monto de Compra</Typography>
        </AccordionSummary>        
        <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>Lista de Juegos</Typography>
        </AccordionSummary>        
        <AccordionDetails>
          <Typography>
            {
              cartList.map( juego => (
                <div key={juego.id}>
                  <p>{juego.nombre}</p>
                  <hr />                  
                </div>
              ))
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
