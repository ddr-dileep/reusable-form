import React, { memo } from "react";
import Select from "../select/Select";

const AppInput = ({ field, onChange }) => {
  const { label, id, name, placeholder, type, options, value, min, max } =
    field;

  return (
    <div className="form-floating mb-3">
      {type === "select" ? (
        <Select
          name={name}
          id={id}
          onChange={onChange}
          options={options}
          label={label}
          value={value}
        />
      ) : type === "textarea" ? (
        <>
          <textarea
            style={{ height: "100px" }}
            type={type}
            name={name}
            className="form-control"
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            max={max}
            min={min}
          />
          <label htmlFor={id}>{label}</label>
        </>
      ) : (
        <>
          <input
            type={type}
            name={name}
            className={`${
              type === "checkbox" ? "form-check-input" : "form-control"
            }`}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            max={max}
            min={min}
          />
          <label
            className={`${type === "checkbox" ? "form-check-label p-0 px-4" : ""}`}
            htmlFor={id}
          >
            {label}
          </label>
        </>
      )}
    </div>
  );
};

export default memo(AppInput);
