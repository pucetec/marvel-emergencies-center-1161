// components/EmergencyForm.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EmergencyForm = ({ onAddEmergency }) => {
  const [emergency, setEmergency] = useState("");

  const handleAddEmergency = () => {
    if (emergency.trim() !== "") {
      onAddEmergency(emergency);
      setEmergency("");
    }
  };

  return (
    <div>
      <TextField
        label="Ingrese una emergencia"
        variant="outlined"
        value={emergency}
        onChange={(e) => setEmergency(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddEmergency}>
        Agregar
      </Button>
    </div>
  );
};

export default EmergencyForm;
