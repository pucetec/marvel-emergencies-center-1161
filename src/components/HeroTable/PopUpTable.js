import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useHeroContext } from '../../contextos/HeroContext';
import TableEdit from '../../common/Table/Table';
import NormalButton from '../../common/Button/NormalButton';
import AddButton from '../../common/Button/AddButton';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PopUpTable = () => {
    const {heroStatus} = useHeroContext();

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
  
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
              Heroes
            </Typography>
            {heroStatus && (
                <TableEdit headers={["#", "Emergencia", "Acciones"]} bodyRows={heroStatus.data.results.map((hero, index) => [
                    hero.id,
                    hero.name,
                    <NormalButton text={"Asignar"} variant={"contained"} ></NormalButton>
                ])} ></TableEdit>
            )}
            <Button onClick={handleClose}>Cerrar</Button>
          </Box>
        </Modal>
      </div>
    );
  }

export default PopUpTable;