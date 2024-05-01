import React, { memo } from "react";
import "./styles.scss";

const Button = ({ title, onClick, isDisabled, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn btn-primary ${className}`}
      disabled={isDisabled}
    >
      {isDisabled && (
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      {title}
    </button>
  );
};

export default memo(Button);
