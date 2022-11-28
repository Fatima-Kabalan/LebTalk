import React, { useEffect, useState } from "react";
import request from "../../config/axios";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
// import Button from "../Components/Button";
import { REACT_APP_BASE_URL } from "../../env";
import axios from 'axios';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  { field: 'phone_number', headerName: 'Phone Number', width: 130 },
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

  
const [users, setUsers] = useState([]);

useEffect(() => {
  request({
    method: "GET",
    url: `${REACT_APP_BASE_URL}/api/v1/getUsers`,
  })
    .then((response) => {
      console.log(response);
      setUsers(response.data);
      console.log(users)
    })
    .catch((error) => {
      console.log(error);
    });
});

  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={users}
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
