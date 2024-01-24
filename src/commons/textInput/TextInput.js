import React from "react";
import { TextField } from "@mui/material";
import { useEmergency } from "../../context/EmergencyContextManagement";

const TextInput = () => {
  const { setNewEmergencyName } = useEmergency();
  return <TextField onChange={(e) => setNewEmergencyName(e.target.value)}></TextField>
};

export default TextInput;