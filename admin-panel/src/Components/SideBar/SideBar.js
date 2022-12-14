import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import QuizIcon from '@mui/icons-material/Quiz';
import StyleIcon from '@mui/icons-material/Style';
import PeopleIcon from '@mui/icons-material/People';
import SideBarStyle from './SideBarStyle.css';
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
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem key={"Users"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon  className="icon"/>
                </ListItemIcon>
               
                <Link className="link" to ="/user">
                  <ListItemText primary={"Users"} />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem key={"Categories"} disablePadding>
              <ListItemButton>

                <ListItemIcon>
                  <CategoryIcon className="icon"/>
                </ListItemIcon>

                <Link className="link" to ="/category">
                  <ListItemText primary={"Categories"} />
                </Link>

              </ListItemButton>
            </ListItem>

           <ListItem key={"Questions"} disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                  <QuizIcon  className="icon" />
                </ListItemIcon>

                <Link className="link" to ="/question">
                  <ListItemText primary={"Questions"} />
                </Link>

              </ListItemButton>
            </ListItem>

            <ListItem key={"Cards"} disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                  <StyleIcon  className="icon"/>
                </ListItemIcon>

                <Link className="link" to ="/card">
                  <ListItemText primary={"Cards"} />
                </Link>

              </ListItemButton>
            </ListItem>

            <ListItem key={"Instructors"} disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                  <PeopleIcon  className="icon" />
                </ListItemIcon>

                <Link className="link" to ="/instructor">
                  <ListItemText primary={"Instructors"} />
                </Link>

              </ListItemButton>
            </ListItem>


        </List>
      </Drawer>
  );
}
