import React from "react";
import { TextField } from "@mui/material";
import { useEmergency } from "../../context/EmergencyContextManagement";

const TextInput = ({ value, onChange}) => {
  const { setNewEmergencyName } = useEmergency();
  return <TextField value={value} onChange={onChange}></TextField>
};

export default TextInput;