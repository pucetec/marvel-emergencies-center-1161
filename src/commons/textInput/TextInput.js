import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ value, onChange}) => {
  return <TextField value={value} onChange={onChange}></TextField>
};

export default TextInput;