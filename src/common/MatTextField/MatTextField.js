import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';

const MatTextField = ({label, variant, onChange}) => {
  return (
    <Container
      style={{
        paddingTop: "6px"
      }}
    >
    <TextField label={label} variant={variant} onChange={onChange} size='small'/>
    </Container>
  );
};

export default MatTextField;