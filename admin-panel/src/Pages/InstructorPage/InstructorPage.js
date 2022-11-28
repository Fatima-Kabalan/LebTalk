import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../../Components/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import Content from '../../Components/Content';
import { Link } from 'react-router-dom';
import InstructorTable from '../InstructorPage/InstructorTable';
import InstructorDialog from '../InstructorPage/InstructorDialog';




export default function CategoryPage() {

  const [open, setOpen] = React.useState(true);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <div>
            <Box sx={{ display: 'flex' }}>
            <Link to ="/instructor">
            <button>Hi</button>
                <CssBaseline />
                <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
                <SideBar open={open} handleDrawerClose={handleDrawerOpen} />
                <Content open={open} />
            </Link>
            <InstructorTable/>
            </Box> 
        </div>
        <div>
            <InstructorDialog/>
        </div>
    </div>
  );
}
