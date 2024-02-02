import * as React from "react";
import { useState } from "react";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Box, Button, Modal } from "@mui/material";

const AppModal = ({ heroes,onAssignHero,selectedHero }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        variant="text"
        startIcon={<CropFreeIcon />}
        onClick={handleOpenModal}
      ></Button>

   
      <Modal open={isOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h1 style={{textAlign:'center'}}>
            Asigna tu héroe
          </h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Asignar</th>
              </tr>
            </thead>
            <tbody>
              {heroes.map((hero) => (
                <tr key={hero.id}>
                  <td>{hero.id}</td>
                  <td>{hero.name}</td>
                  <td>
                    <Button variant="contained" 
                    onClick={() => onAssignHero(hero)}>Asignar</Button >
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button  onClick={handleCloseModal}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AppModal;
