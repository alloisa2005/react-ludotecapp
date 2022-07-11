import React from "react";
import { separadorMiles, transformarFecha } from "../../utilidades/Utilidades";
import './CompraItem.css'

function CompraItem({ compra }) {  

  return (
    <div className="compra_item">
      <div className="compra_total">
        <h4><span>{ transformarFecha(compra.date) }</span> - Impuestos ($): { separadorMiles( compra.total.iva )} - Envío ($): { separadorMiles( compra.total.envio )}</h4>
        <h4 className="compra_total_total">Total ($): { separadorMiles( compra.total.total ) }</h4>
      </div>
      <div>
        {
          compra.items.map( (item,index) => (
            <div key={item.id} className="compra_card">
              <img src={item.img} alt={item.name} />
              <p>{ item.title }</p>
              <p>Cantidad: { item.quantity }</p>
              <p>Monto ($): { separadorMiles( item.quantity * item.price ) }</p>              
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CompraItem;
