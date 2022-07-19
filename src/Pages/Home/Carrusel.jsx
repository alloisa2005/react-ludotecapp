import React from "react";
import carr1 from "../../images/carrusel1.jpg";
import carr2 from "../../images/carrusel2.jpg";
import carr3 from "../../images/carrusel3.jpg";

import './Carrusel.css'

function Carrusel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carr1} className="img_carrusel img_carrusel" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carr2} className="img_carrusel" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carr3} className="img_carrusel" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;
