import React from "react";
import { Outlet } from "react-router-dom";
import SideBarr from "../../Components/SideBarr.js/SideBarr";
import "../SideBarStyle/SideBarStyle.css";
const SideBarStyle = () => {
  return (
    <>
      <SideBarr />
      <div className="big-container outlet">
        <Outlet />
      </div>
    </>
  );
};

export default SideBarStyle;