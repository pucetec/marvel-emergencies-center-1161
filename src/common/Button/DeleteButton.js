import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export default function DeleteButton() {
  return (
      <IconButton>
        <DeleteIcon fontSize='small'/>
      </IconButton>
  );
}