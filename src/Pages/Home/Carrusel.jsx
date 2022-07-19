import React from "react";
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
          <img src={process.env.PUBLIC_URL+"assets/carrusel1.jpg"} className="img_carrusel img_carrusel" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={process.env.PUBLIC_URL+"assets/carrusel1.jpg"} className="img_carrusel" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={process.env.PUBLIC_URL+"assets/carrusel1.jpg"} className="img_carrusel" alt="..." />
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
