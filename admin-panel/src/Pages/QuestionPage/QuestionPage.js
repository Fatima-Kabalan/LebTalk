import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../../Components/NavBar';
import SideBar from '../../Components/SideBar';
import Content from '../../Components/Content';
import { Link } from 'react-router-dom';
import CategoryTable from '../../Components/CategoryTable';
import { REACT_APP_BASE_URL } from "../../env.js";
import axios from 'axios';
import QuestionTable from "../QuestionPage/QuestionTable";
import QuestionDialog from "../QuestionPage/QuestionDialog"



export default function QuestionPage() {

  const [open, setOpen] = React.useState(true);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <div>
            <Box sx={{ display: 'flex' }}>
            <Link to ="/question">
            <button>Hi</button>
                <CssBaseline />
                <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
                <SideBar open={open} handleDrawerClose={handleDrawerOpen} />
                <Content open={open} />
            </Link>
            <QuestionTable/>
            </Box> 
        </div>
        <div>
            <QuestionDialog/>
        </div>
    </div>
  );
}
