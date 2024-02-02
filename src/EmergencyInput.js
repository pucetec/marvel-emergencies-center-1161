import React, { useState } from "react";
import { useEmergencyContext } from "./EmergencyContext";
import { TextField, Button, Grid } from "@mui/material";

const EmergencyInput = () => {
  const { addEmergency } = useEmergencyContext();
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== "") {
      addEmergency(description);
      setDescription("");
    }
  };

  return (
    <Grid item xs={12}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Emergencia "
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Ingresar
        </Button>
      </form>
    </Grid>
  );
};

export default EmergencyInput;
