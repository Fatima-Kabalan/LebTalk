import React, { useEffect, useState } from "react";
import request from "../../config/axios";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Button from "react";
import { REACT_APP_BASE_URL } from "../../env";
import axios from 'axios';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Instructor Name', width: 130 },
  { field: 'profile_picture',headerName: 'Instructor Image'},
  { field: 'phone_number',headerName: 'Phone Number'},
];


function CustomToolbar() {

  return (
    <GridToolbarContainer >
      <GridToolbarExport  style={{color:'#BD4543'}}/>
    </GridToolbarContainer>
  );
}

export default function DataTable() {

  
const [instructors, setInstructors] = useState([]);

useEffect(() => {
  request({
    method: "GET",
    url: `${REACT_APP_BASE_URL}/api/v1/getInstructors`,
  })
    .then((response) => {
      console.log(response);
      setInstructors(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={instructors} 
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
      
    </div>
  );
}
