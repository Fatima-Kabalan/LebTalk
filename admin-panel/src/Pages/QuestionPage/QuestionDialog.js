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
  const [image , setImage] = React.useState("");
  const [title , setTitle] = React.useState("");
  const [ categoryID, setCategoryID] = React.useState("");


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
      question :` ${title}` , 
      question_image: `${image}`, 
     categories_id: `${categoryID}`, 
      
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
        Add Question
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
            label="Question Title"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Question Image"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setImage(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category ID"
            type="integer"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setCategoryID(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={save()}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}