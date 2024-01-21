import Button from '@mui/material/Button';
import React from 'react';

const MatButton = ({text, variant, onClick}) => {
  return (
    <Button variant={variant} onClick={onClick}>{text}</Button>
  );
};

export default MatButton;