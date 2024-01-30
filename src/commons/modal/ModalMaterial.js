import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalTable from '../tables/ModalTable';
import { useEmergency } from "../../context/EmergencyContextManagement";

const ModalMaterial = () => {
  const { open, handleClose, style, handleClickModal } = useEmergency();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={(indexModal) => handleClickModal(indexModal)}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Asigna tu super héroe
          </Typography>
          <ModalTable />           
        </Box>
      </Modal>
    </div>
  );
}

export default ModalMaterial;