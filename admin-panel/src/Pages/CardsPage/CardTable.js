import React, { useEffect, useState } from "react";
import request from "../../config/axios";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { REACT_APP_BASE_URL } from "../../env";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "card_image", headerName: "Image", width: 130 },
  { field: "voice_note", headerName: "Voice Url" },
  { field: "english_text", headerName: "English Text" },
  { field: "arabic_text", headerName: "Arabic text" },
  { field: "categories_id", headerName: "Categories ID" },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function DataTable() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    request({
      method: "GET",
      url: `${REACT_APP_BASE_URL}/api/v1/getCards`,
    })
      .then((response) => {
        console.log(response);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={categories}
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
