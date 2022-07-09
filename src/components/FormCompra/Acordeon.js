import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CartContext } from '../../context/CartContext';
import { separadorMiles } from '../../utilidades/Utilidades';
export default function Acordeon() {

  const { cartList, total, montoTotalCart, iva, envio } = useContext(CartContext);

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
            <div style={{width:"100%", padding:"0 40px"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>SubTotal ($):</p>              
                <p>{separadorMiles( montoTotalCart() )}</p>
              </div>
              
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>IVA(20%) ($):</p>              
                <p>{ separadorMiles( iva() )}</p>
              </div>
              
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>Envío ($):</p>              
                <p>{ separadorMiles( envio() )}</p>
              </div>

              <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>TOTAL ($):</p>              
                <p>{separadorMiles( total() )}</p>
              </div>

            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>Lista de Productos</Typography>
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
