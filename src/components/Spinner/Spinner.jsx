import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import './Spinner.css'

function Spinner() {
  return (
    <div className="loading_div">
      <CircularProgress className="loading" color="inherit" />
      <h3>Cargando...</h3>
    </div>
  );
}

export default Spinner;
