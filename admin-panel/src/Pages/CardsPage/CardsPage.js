import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../../Components/NavBar';
import SideBar from '../../Components/SideBar';
import Content from '../../Components/Content';
import { Link } from 'react-router-dom';
import CardTable from '../../Components/CardTable';
import AddPopup from '../../Components/AddPopup/AddPopup';
import PopupStyle from "../../Components/AddPopup/PopupStyle.css";
import Popup from 'reactjs-popup';
import CategoryStyle from  '../CategoryPAge/CategoryStyle.css';
import CardDialog from '../../Components/FormDialog/CardDialog'

export default function CardsPage() {

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
        <div>
            <Box sx={{ display: 'flex' }}>
            <Link to ="/card">
            <button>Hi</button>
                <CssBaseline />
                <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
                <SideBar open={open} handleDrawerClose={handleDrawerOpen} />
                <Content open={open} />
            </Link>
            <CardTable/>
            </Box> 
        </div>
        <div>
          <CardDialog/>
        {/* <Popup trigger={<button className='btn'> Add Card </button>} 
     position="center" >
      <div className="form-popup" id="myForm">
        <form action="/action_page.php" class="form-container">
            <h1>Add Card</h1>

            <label for="Card Name"><b>Card Name</b></label>
            <input type="text" placeholder="Enter name" name="name" required />

            <label for="text"><b>Card Image</b></label>
            <input type="text" placeholder="Enter Image" name="image" required />

            <label for="text"><b>Voice Note</b></label>
            <input type="text" placeholder="Enter url" name="image" required />

            <label for="text"><b>English Text</b></label>
            <input type="text" placeholder="Enter Text" name="image" required />

            <label for="text"><b>Arabic Text</b></label>
            <input type="text" placeholder="Enter Text" name="image" required />

            <label for="text"><b>Categories ID</b></label>
            <input type="text" placeholder="Enter " name="image" required />

            <button type="submit" className="btn">Save</button>
            <button type="button" className="btn cancel" onclick="closeForm()">Close</button>
        </form> */}
      {/* </div>
    </Popup> */}
            </div>
    </div>
  );
}
