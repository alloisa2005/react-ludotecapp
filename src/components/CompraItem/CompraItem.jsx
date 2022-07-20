import React from "react";
import { Link } from "react-router-dom";
import { separadorMiles, transformarFecha } from "../../utilidades/Utilidades";
import "./CompraItem.css";

function CompraItem({ compra }) {
  return (
    <div className="compra_item">
      <div className="compra_total">
        {/* <h4><span>{ transformarFecha(compra.date) }</span> - Impuestos ($): { separadorMiles( compra.total.iva )} - Envío ($): { separadorMiles( compra.total.envio )}</h4>         */}
        <h4 className="compra_total_total">
          {transformarFecha(compra.date)} -{" "}
          {compra.buyer.name}
        </h4>
        <h4 className="compra_total_total">
          Total ($): {separadorMiles(compra.total.total)}
        </h4>
      </div>
      <div>
        {compra.items.map((item, index) => (
          <>
            <div key={item.id} className="compra_card">
              <Link to={`/item/${item.id}`}>                
                <img src={item.img} alt={item.name} />{" "}
              </Link>
              <div className="compra_card_detail">
                <p className="compra_card_p">{item.title}</p>
                <p className="compra_card_p">Cantidad: {item.quantity}</p>
                <p className="compra_card_p">
                  Monto ($): {separadorMiles(item.quantity * item.price)}
                </p>
              </div>
            </div>
            {index < compra.items.length - 1 ? <hr /> : null}
            {index === compra.items.length - 1 ? ( 
              <>
                <hr />
                <div className="compra_card">
                  <img src={"./assets/delivery.png"} alt="Img de delivery" />
                  <div>
                    <p className="compra_card_p">Impuestos y/o Envío</p>
                    <p className="compra_card_p">
                      Monto ($): {separadorMiles(compra.total.envio + compra.total.iva)}
                    </p>
                  </div>
                </div>
              </>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default CompraItem;
