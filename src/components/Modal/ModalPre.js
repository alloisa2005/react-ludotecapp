import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  scrollY: 'hidden',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height: 650,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 3,
};

const ModalPre = ({img}) =>{

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{width:"100%", height:"455px", position:"relative"}} onClick={handleOpen}>
        <img src={img} style={{width:"100%", height:"100%", objectFit:"contain"}} alt="Imagen" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={img} style={{width:"100%", height:"100%", objectFit:"contain"}} alt="Imagen" />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalPre;
