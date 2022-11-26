import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../../Components/NavBar';
import SideBar from '../../Components/SideBar';
import Content from '../../Components/Content';
import { Link } from 'react-router-dom';
import CategoryTable from '../../Components/CategoryTable';
import CategoryStyle from  '../CategoryPAge/CategoryStyle.css';
import AddPopup from '../../Components/AddPopup/AddPopup';
import PopupStyle from "../../Components/AddPopup/PopupStyle.css";
import Popup from 'reactjs-popup';
import { REACT_APP_BASE_URL } from "../../env.js";
import axios from 'axios';
import CategoryDialog from '../../Components/FormDialog/CategoryDialog';


export default function CategoryPage() {

  const [open, setOpen] = React.useState(true);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <div>
            <Box sx={{ display: 'flex' }}>
            <Link to ="/category">
            <button>Hi</button>
                <CssBaseline />
                <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
                <SideBar open={open} handleDrawerClose={handleDrawerOpen} />
                <Content open={open} />
            </Link>
            <CategoryTable/>
            </Box> 
        </div>
        <div>
            <CategoryDialog/>
        </div>
    </div>
  );
}
