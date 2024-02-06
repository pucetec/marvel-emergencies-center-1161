import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

export default function AddButton({onClick}) {
  return (
      <IconButton>
        <AddCircleTwoToneIcon fontSize='small' onClick={onClick}/>
      </IconButton>
  );
}