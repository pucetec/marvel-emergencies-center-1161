import React from "react";
import Button from "@mui/material/Button";
import { useEmergency } from "../../context/EmergencyContextManagement";

const ButtonMaterial = ({ text, onClick }) => {
  const { newEmergencyClick } = useEmergency();
  return <Button variant="contained" onClick={onClick} >{text}</Button>
};

export default ButtonMaterial;

