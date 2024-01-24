
import * as React from 'react';
import Button from '@mui/material/Button';

const NormalButton = ({text, variant}) => {
  return (
    <div>
      <Button variant={variant}>{text}</Button>
    </div>
  );
}

export default NormalButton;