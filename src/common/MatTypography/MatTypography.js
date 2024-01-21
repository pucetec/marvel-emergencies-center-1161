import React from "react";
import Typography from "@mui/material/Typography";

const MatTypography = ({ text, variant, paddingTop }) => {
  return (
    <Typography variant={variant} gutterBottom>
      {text}
    </Typography>
  );
};

export default MatTypography;
