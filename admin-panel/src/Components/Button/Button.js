import React from "react";
import "../Button/ButtonStyle.css";

const Button = ({ width, mode, onClick, text }) => {
  return (
    <button className={`button-${mode} button-${width}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;