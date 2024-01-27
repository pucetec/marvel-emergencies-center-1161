import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalTable from '../tables/ModalTable';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalMaterial = ({ open, onClose }) => {
  
  return (
    <div>
      
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Asigna tu super héroe
          </Typography>
          <ModalTable
           headers={["#", "Nombre", "Asignar"]}
           bodyContent={[{nombre: "IronMan"}, {nombre: "Thor"}, {nombre: "Hulk"}]}
           />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalMaterial;