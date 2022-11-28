import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import Content from "../../Components/Content";
import { Link } from "react-router-dom";
import CategoryTable from "../CategoryPAge/CategoryTable";
import CategoryDialog from "../CategoryPAge/CategoryDialog";

export default function CategoryPage() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div>
        <Box sx={{ display: "flex" }}>
          <Link to="/category">
            <button>Hi</button>
            <CssBaseline />
            <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
            <SideBar open={open} handleDrawerClose={handleDrawerOpen} />
            <Content open={open} />
          </Link>
          <CategoryTable />
        </Box>
      </div>
      <div>
        <CategoryDialog />
      </div>
    </div>
  );
}
