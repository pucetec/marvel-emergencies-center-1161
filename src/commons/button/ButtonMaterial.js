import React from "react";
import Button from "@mui/material/Button";

const ButtonMaterial = ({ text, onClick }) => {
  return <Button variant="contained" onClick={onClick} >{text}</Button>
};

export default ButtonMaterial;

