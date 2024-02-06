import Button from "@mui/material/Button";
import React from "react";
import buttonStyles from "./ButtonStyles";

const MatButton = ({ text, variant, onClick, disabled }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={buttonStyles}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default MatButton;
