import TextField from '@mui/material/TextField';
import React from 'react';

const MatTextField = ({label, variant, onChange}) => {
  return (
    <TextField label={label} variant={variant} onChange={onChange}/>
  );
};

export default MatTextField;