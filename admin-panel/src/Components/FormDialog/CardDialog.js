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
  const [voice , setVoice] = React.useState("");
  const [englishText , setEnglishText] = React.useState("");
  const [arabicText , setArabicText] = React.useState("");
  const [categoryId , setCategoryID] = React.useState("");
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


      
const save = async () => {
   await axios({
    method: "post",
    url: `${REACT_APP_BASE_URL}/api/v1/addCard`,
    data: { 
      card_image : `${image}`, 
      voice_note : `${voice}`, 
      english_text : `${englishText}`, 
      arabic_text : `${arabicText}`, 
      categories_id : `${categoryId}`, 
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
        Add Card
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a card, please fill the form bellow.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Card Image"
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
            label="English Text"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setEnglishText(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Arabic Text"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setArabicText(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category ID"
            type="number"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setCategoryID(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Voice Note"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => {
              setVoice(e.target.value);
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