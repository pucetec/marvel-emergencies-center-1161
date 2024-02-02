import React, { useState } from "react";
import { useEmergencyContext } from "./EmergencyContext";
import { TextField, Button, Grid, Typography} from "@mui/material";

const EmergencyInput = () => {
  const { addEmergency } = useEmergencyContext();
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== "") {
      addEmergency(description);
      setDescription("");
      setError(false);
    } else {
      // Mostrar un mensaje de error si la descripción está en blanco
      setError(true);
    }
  };

  return (
    <Grid item xs={12}>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Emergencia"
        variant="outlined"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          // Limpiar el estado de error al escribir en el campo
          setError(false);
        }}
      />
      {/* Mostrar mensaje de error si la descripción está en blanco */}
      {error && (
        <Typography variant="caption" color="error">
          La descripción no puede estar en blanco.
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary">
        Ingresar
      </Button>
    </form>
  </Grid>
);
};

export default EmergencyInput;