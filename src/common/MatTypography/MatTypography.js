import React from "react";
import Typography from '@mui/material/Typography';

const MatTypography = ({text, variant}) => {
  return (
    <Typography variant={variant} gutterBottom>
    {text}
  </Typography>
  );
};

export default MatTypography;