import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CartContext } from '../../context/CartContext';

export default function FormCompra() {
  const [cartList, setCartList, cantidadItems, clearCart, addCart, removeItem, montoTotalCart, iva, envio, total ] = useContext(CartContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  return (
    <div>
      <button onClick={handleClickOpen} className="botones_container_btn btn_blue">
        Finalizar Compra
      </button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ingrese datos para la entrega</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense" 
            id="name"
            label="Nombre y apellido"
            type="text"
            fullWidth
            variant="standard"            
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            helperText="Este correo será usado para enviarle los datos de la compra"
          />
        </DialogContent>
        
        <DialogActions>
          <button className='botones_container_btn btn_white' onClick={handleClose}>CANCELAR</button>
          <button className='botones_container_btn btn_blue' onClick={handleClose}>CONFIRMAR</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
