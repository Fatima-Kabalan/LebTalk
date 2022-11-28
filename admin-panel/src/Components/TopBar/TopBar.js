import React from "react";
import logo from "../../assets/tarboush.jpg";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <img src={logo} alt="logo" />
      <h1 className="leb-text">Leb<span className="talk-text">Talk</span></h1>
    </div>
  );
};

export default TopBar;