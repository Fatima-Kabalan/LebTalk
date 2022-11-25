import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { REACT_APP_BASE_URL } from "../../env.js";
import axios from 'axios';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name , setName] = React.useState("");
  const [image , setImage] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

      
const save = async () => {
  await axios({
    method: "post",
    url: `${REACT_APP_BASE_URL}/api/v1/addCategory`,
    data: {
      category_name :` ${name}` , 
      category_image : `${image}`, 
      admin_id: 1 , 
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <div>
      <Button className="btn" variant="outlined" onClick={handleClickOpen}>
        Add Category 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a category, please fill the form bellow.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category Image"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setImage(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={save}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}