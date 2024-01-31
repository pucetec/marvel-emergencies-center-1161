import * as React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import CropFreeIcon from "@mui/icons-material/CropFree";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AppModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalResponse, setModalResponse] = useState("");
  const handleButtonClick = (text, botonName) => {
    setIsOpen(true);
    setModalText(text);
    const myButtonstring = "Diste click en botón: " + botonName;
    setModalResponse(myButtonstring);
  };
  const textos = [];
  return (
    <div>
      <Button
        variant="text"
        startIcon={<CropFreeIcon />}
        onClick={() => setIsOpen(true)}
      ></Button>
      <Modal
        open={isOpen}
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
          <Button onClick={() => setIsOpen(false)}>close</Button>
        </Box>
      </Modal>
      {textos.map((item, position) => (
        <Button onClick={() => handleButtonClick(item.text, item.botonName)}>
          {item.botonName}
        </Button>
      ))}
      <div>{modalResponse}</div>
    </div>
  );
};
