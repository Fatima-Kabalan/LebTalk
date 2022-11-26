import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideBar({handleDrawerClose, open}) {
  const theme = useTheme();

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem key={"Users"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
               
                <Link to ="/user">
                  <ListItemText primary={"Users"} />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem key={"Categories"} disablePadding>
              <ListItemButton>

                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>

                <Link to ="/category">
                  <ListItemText primary={"Categories"} />
                </Link>

              </ListItemButton>
            </ListItem>

           <ListItem key={"Questions"} disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>

                <Link to ="/question">
                  <ListItemText primary={"Questions"} />
                </Link>

              </ListItemButton>
            </ListItem>

            <ListItem key={"Cards"} disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>

                <Link to ="/card">
                  <ListItemText primary={"Cards"} />
                </Link>

              </ListItemButton>
            </ListItem>

            <ListItem key={"Instructors"} disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>

                <Link to ="/instructor">
                  <ListItemText primary={"Instructors"} />
                </Link>

              </ListItemButton>
            </ListItem>


        </List>
      </Drawer>
  );
}
