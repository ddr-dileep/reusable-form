import React from "react";

const Select = ({ id, options, name, label, onChange }) => {
  return (
    <div className="form-floating">
      <select
        className="form-select"
        aria-label="Floating label select example"
        onChange={onChange}
        name={name}
        id={id}
      >
        {options?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor="floatingSelect">{label}</label>
    </div>
  );
};

export default Select;
