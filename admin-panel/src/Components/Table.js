import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Button from "../Components/Button";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  {
    field: 'email',
    headerName: 'email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  }
];

const rows = [
  { id: 1, name: 'Snow', firstName: 'Jon', email:'fatima@fatima'  },
  
  { id: 2,name: 'Lannister', email:'fatima@fatima' },
  { id: 3,name: 'Lannister',  email:'fatima@fatima' },
  { id: 4,name: 'Stark',   email:'fatima@fatima' },
  { id: 5,name: 'Targaryen',email:'fatima@fatima'  },
  { id: 6,name: 'Melisandre',  email:'fatima@fatima'  },
  { id: 7,name: 'Clifford',  email:'fatima@fatima' },
  { id: 8,name: 'Frances',   email:'fatima@fatima' },
  { id: 9,name: 'Roxie',    email:'fatima@fatima' },
];


function CustomToolbar() {
  return (
    <GridToolbarContainer >
      <GridToolbarExport  style={{color:'#BD4543'}}/>
      <Button/>
    </GridToolbarContainer>
  );
}

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
