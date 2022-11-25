import React, { useEffect, useState } from "react";
import request from "../../config/axios";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Button from "react";
import { REACT_APP_BASE_URL } from "../../env";


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'question', headerName: 'Question Title', width: 130 },
  { field: 'question_image',headerName: 'Question Image'},
  { field: 'categories_id',headerName: 'Category ID'},
  { field: 'name',headerName: 'Answer'},
  { field: 'is_correct',headerName: 'Correct Answer?(0/1)'},
];


function CustomToolbar() {

  return (
    <GridToolbarContainer >
      <GridToolbarExport  style={{color:'#BD4543'}}/>
    </GridToolbarContainer>
  );
}

export default function DataTable() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        request({
        method: "GET",
        url: `${REACT_APP_BASE_URL}/api/v1/getQuestions`,
        })
        .then((response) => {
            console.log(response);
            setQuestions(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={questions}
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
