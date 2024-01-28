import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TableEdit from '../Table/Table';
import NormalButton from '../Button/NormalButton';
import AddButton from '../Button/AddButton';

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

const FloatButton = ({tittle}) => {

  const heroes = ["Goku","Spidey","Batman"];
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
      <div style={{ display: 'inline-block', marginRight: '5px' }}>
        <AddButton onClick={handleOpen}></AddButton>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {tittle}
            </Typography>
            <TableEdit headers={["#","Hero","Asignar"]} bodyRows={heroes.map((item, position) => [
        position + 1,
        item,
        <NormalButton text={"Asirgnar"} variant={"contained"}/>,
      ])}></TableEdit>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalText}
            </Typography>
            <Button onClick={handleClose}>Cerrar</Button>
          </Box>
        </Modal>
      </div>
    );
  }

export default FloatButton;