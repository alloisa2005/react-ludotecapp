import React, {useState, useContext} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CartContext } from '../../context/CartContext';
import Acordeon from './Acordeon';

import './FormCompra.css'
import { agregarCompra } from '../../firebase/firebaseFunciones';

const initialState = {
  name: '',
  address:'',
  email: '',
  telephone: '',
}

export default function FormCompra() {
  const [cartList, setCartList, cantidadItems, clearCart, addCart, removeItem, montoTotalCart, iva, envio, total ] = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  const handlerOnChange = (e) => {    
    setValues({...values, [e.target.name]: e.target.value});    
  }

  const handleConfirmar = () => {
    let hoy = new Date();
    agregarCompra(values, cartList, hoy, total())
      .then( id => {
        console.log('ID: ',id);
        setValues(initialState);
        handleClose();
      });        
  }

  return (
    <div className='formCompra_container'>
      <button onClick={handleClickOpen} className="botones_container_btn btn_blue">
        Finalizar Compra
      </button>
      
      <Dialog open={open} onClose={handleClose}>              
        <DialogTitle className='formCompra_titulo'>Ingrese los datos para la entrega</DialogTitle>
        <DialogContent>          
          <TextField
            autoFocus
            margin="dense" 
            id="name"
            name='name'
            label="Nombre y apellido"
            type="text"
            fullWidth
            variant="standard"        
            onChange={handlerOnChange}    
          />
          <TextField
            autoFocus
            margin="dense" 
            id="address"
            name='address'
            label="Dirección"
            type="text"
            fullWidth
            variant="standard"    
            onChange={handlerOnChange}         
          />
          <TextField
            autoFocus
            margin="dense" 
            id="telephone"
            name='telephone'
            label="Teléfono"
            type="tel"
            fullWidth
            variant="standard"            
            onChange={handlerOnChange} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name='email'
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            helperText="Este correo será usado para enviarle los datos de la compra" 
            onChange={handlerOnChange}                        
          />
          
        </DialogContent>

        {/* <DialogContent>
          <Acordeon />
        </DialogContent> */}

        <DialogActions>
          <button className='botones_container_btn btn_white' onClick={handleClose}>CANCELAR</button>
          <button className='botones_container_btn btn_blue' onClick={handleConfirmar}>CONFIRMAR</button>          
        </DialogActions>
      </Dialog>      
    </div>
  );
}
