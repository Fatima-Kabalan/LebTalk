import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';


export default function Buttons() {
    return (
        <Button variant="outlined"  style={{background:'#F29D38' , color:'white' , borderStyle:'none' , borderRadius:30,}} startIcon={<DeleteIcon />}>
          Delete
        </Button>
    );
  };