import Button from '@mui/material/Button';
import React from 'react';

const MatButton = ({text, variant}) => {
  return (
    <Button variant={variant}>{text}</Button>
  );
};

export default MatButton;