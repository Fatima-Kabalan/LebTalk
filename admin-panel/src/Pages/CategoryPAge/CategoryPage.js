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
import request from '../../config/axios'


export default function CategoryPage() {

  const [open, setOpen] = React.useState(true);
  const [name , setName] = React.useState("");
  const [image , setImage] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

    
const save = async () => {
request({
  method: "post",
  url: "addCategory",
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
        <Popup trigger={<button className='btn'> Add Category </button>} 
     position="top center">
      <div className="form-popup" id="myForm">
        <form action="/action_page.php" class="form-container">
            <h1>Add Category</h1>

            <label for="Category Name"><b>Category Name</b></label>
            <input type="text" placeholder="Enter name" 
            onChange = {(e) => {
              setName(e.target.value);
            }} />

            <label for="text"><b>Category Image</b></label>
            <input type="text" placeholder="Enter Image" 
            onChange={(e) => {
              setImage(e.target.value);
            }}
              />

            <button type="submit" className="btn" 
            onClick={
              (e)=>{ 
               e.preventDefault();
                 console.log(name);
                save();
              }
            
            }>Save</button>
            <button type="button" className="btn cancel" onclick="closeForm()">Close</button>
        </form>
      </div>
    </Popup>
            </div>
    </div>
  );
}
