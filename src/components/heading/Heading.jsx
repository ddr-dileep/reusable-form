import React from "react";
import "./styles.scss";

const Heading = ({ title, subtitle, className }) => {
  return (
    <div className={`${className} heading_main`}>
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  );
};

export default Heading;
