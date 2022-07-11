import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CartContext } from "../../context/CartContext";
import Acordeon from "./Acordeon";

import "./FormCompra.css";
import { agregarCompra } from "../../firebase/firebaseFunciones";
import { Alert, CircularProgress } from "@mui/material";

const initialState = {
  name: "",
  address: "",
  email: "",
  telephone: "",
};

export default function FormCompra() {
  const { cartList, clearCart, montoTotalCart, iva, envio } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialState);
  const [cargando, setCargando] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [idCompra, setIdCompra] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if(idCompra !== ''){
      clearCart();
    }
  };

  const handlerOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleConfirmar = () => {
    if (values.address === "" || values.name === "" || values.email === "") {
      setAlerta(true);
      return;
    }

    setCargando(true);
    
    let items = [];
    cartList.forEach((item) => items.push({ id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity, img: item.img }));
    let total = {subtotal: montoTotalCart(), iva: iva(), envio: envio(), total: montoTotalCart() + iva() + envio()};

    agregarCompra(values, items, total).then((id) => {
      setValues(initialState);
      setCargando(false);
      setIdCompra(id);            
    });
  };

  return (    
    <div className="formCompra_container">
      <button
        onClick={handleClickOpen}
        className="botones_container_btn btn_blue"
      >
        Finalizar Compra
      </button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="formCompra_titulo">
          Ingrese los datos para la entrega
        </DialogTitle>
        {alerta ? (
          <Alert variant="filled" severity="error">
            Nombre, Dirección y Email son datos obligatorios
          </Alert>
        ) : null}
        {idCompra !== ''? (
          <Alert variant="filled" severity="success" className="alerta_ok">
            Compra realizada con éxito, su ID de compra es: <span>{idCompra}</span>
          </Alert>
        ) : null}
        <DialogContent>
          <TextField
            autoFocus
            onFocus={() => setAlerta(false)}
            margin="dense"
            id="name"
            name="name"
            label="Nombre y apellido"
            type="text"
            fullWidth
            variant="standard"
            onChange={handlerOnChange}
          />
          <TextField
            autoFocus
            onFocus={() => setAlerta(false)}
            margin="dense"
            id="address"
            name="address"
            label="Dirección"
            type="text"
            fullWidth
            variant="standard"
            onChange={handlerOnChange}
          />
          <TextField
            autoFocus
            onFocus={() => setAlerta(false)}
            margin="dense"
            id="telephone"
            name="telephone"
            label="Teléfono"
            type="tel"
            fullWidth
            variant="standard"
            onChange={handlerOnChange}
          />
          <TextField
            autoFocus
            onFocus={() => setAlerta(false)}
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            helperText="Este correo será usado para enviarle los datos de la compra"
            onChange={handlerOnChange}
          />
        </DialogContent>

        <DialogContent>
          <Acordeon />
        </DialogContent>

        <DialogActions>
          <button
            className="botones_container_btn btn_white"
            onClick={handleClose}
          >
            {idCompra !== '' ? 'CERRAR': 'CANCELAR'}
          </button>
          <button
            className={idCompra !== '' ? 'botones_container_btn btn_blue btn_oculto' : 'botones_container_btn btn_blue'}
            onClick={handleConfirmar}
            disabled={cargando}
          >            
            {cargando ? (
              <CircularProgress className="compra_loading" />
            ) : (
              "CONFIRMAR"
            )}
            
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
