import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import Content from '../Components/Content';
import { Link } from 'react-router-dom';
import UserTable from '../Components/UserTable';



export default function PersistentDrawerLeft() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
<Box sx={{ display: 'flex' }}>
      
       
      <Link to ="/user">
      <CssBaseline />
      <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Content open={open} />
      </Link>
      <UserTable/>
      
    </Box>
    
    </div>
    
  );
}
