import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const BasicModal = () => {

  const textos = ["Soy el boton 1","Soy el boton 2","Soy el boton 3"];
  const textos1 = [{text:"Soy el boton 1", buttonName:"Boton 1"},
                    {text:"Soy el boton 2", buttonName:"Boton 2"},
                    {text:"Soy el boton 3", buttonName:"Boton 3"}];

    const [isOpen, setIsOpen] = useState(false);
    const [modalText, setModalText] = useState("");
    const [modalRespon, setModalRespon] = useState("");

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleButtonClick = (text, buttonName) => {
      setIsOpen(true);
      setModalText(text);
      const MyRequest = "Diste Click al boton: " + buttonName;
      setModalRespon(MyRequest);
    }
  
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalText}
            </Typography>
            <Button onClick={handleClose}>Cerrar</Button>
          </Box>
        </Modal>
        {textos1.map((item, position)=> (
          <Button onClick={()=>handleButtonClick(item.text, item.buttonName)}>{item.buttonName}</Button>
        ))}

        <Button onClick={()=>handleButtonClick("Soy el boton 1")}>Boton 1</Button>
        <Button onClick={()=>handleButtonClick("Soy el boton 2")}>Boton 2</Button>
        <Button onClick={()=>handleButtonClick("Soy el boton 3")}>Boton 3</Button>
      </div>
    );
  }

export default BasicModal;