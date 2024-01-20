import TextField from '@mui/material/TextField';
import React from 'react';

const MatTextField = ({label, variant}) => {
  return (
    <TextField label={label} variant={variant}/>
  );
};

export default MatTextField;