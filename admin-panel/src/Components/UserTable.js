import React, { useEffect, useState } from "react";
import request from "../config/axios";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
// import Button from "../Components/Button";

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
    url: "http://192.168.16.106:5000/api/v1/getUsers",
    // data: {
    // //  user_id: localStorage.getItem("id"),
    // //  phone_number: localStorage.getItem("phone_number"),
    // //  email: localStorage.getItem("email"),
    // },
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
