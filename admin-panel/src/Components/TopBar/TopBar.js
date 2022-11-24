import React from "react";
import logo from "../../assets/tarboush.jpg";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="leb-text">
      {/* <img src={logo} alt="logo" /> */}
      <h1 className="leb-text">LebTalk</h1>
      </div>
    </div>
  );
};

export default TopBar;