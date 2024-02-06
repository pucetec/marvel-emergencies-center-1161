import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const DeleteButton = ({onClick}) => {
  return (
      <IconButton>
        <DeleteIcon fontSize='small' onClick={onClick}/>
      </IconButton>
  );
}

export default DeleteButton;