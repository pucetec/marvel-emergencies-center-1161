import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const NormalButton = ({text, variant}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button variant={variant}>{text}</Button>
    </Box>
  );
}

export default NormalButton;