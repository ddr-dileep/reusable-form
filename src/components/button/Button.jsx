import React from "react";
import "./styles.scss";

const Button = ({ title, onClick, isDisabled, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn btn-primary ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
