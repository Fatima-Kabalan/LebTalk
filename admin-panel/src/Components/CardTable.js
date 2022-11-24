import React, { useEffect, useState } from "react";
import request from "../config/axios";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Button from "react";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'card_image', headerName: 'Image', width: 130 },
  { field: 'voice_note',headerName: 'Voice Url'},
  { field: 'english_text',headerName: 'English Text'},
  { field: 'arabic_text',headerName: 'Arabic text'},
  { field: 'categories_id',headerName: 'Categories ID'},
];


function CustomToolbar() {

  return (
    <GridToolbarContainer >
      <GridToolbarExport  style={{color:'#BD4543'}}/>
      {/* <Button/> */}
    </GridToolbarContainer>
  );
}

export default function DataTable() {

  
const [categories, setCategories] = useState([]);

useEffect(() => {
  request({
    method: "GET",
    url:" http://192.168.16.106:5000/api/v1/getCards",
  })
    .then((response) => {
      console.log(response);
      setCategories(response.data);
    //   console.log(categories)
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={categories}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        components={{
          Toolbar: CustomToolbar,
        }}
      />
      
    </div>
  );
}
