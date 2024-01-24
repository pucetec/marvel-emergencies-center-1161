import React from "react";
import Button from "@mui/material/Button";
import { useEmergency } from "../../context/EmergencyContextManagement";

const ButtonMaterial = ({ text }) => {
  const { newEmergencyClick } = useEmergency();
  return <Button variant="contained" onClick={newEmergencyClick} >{text}</Button>
};

export default ButtonMaterial;

