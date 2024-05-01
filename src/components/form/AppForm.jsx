import React, { memo } from "react";
import AppInput from "./../input/AppInut";

const AppForm = ({ fields, onFormChange, fieldValues }) =>
  fields?.map((field) => (
    <AppInput
      key={field.name + field}
      field={field}
      onChange={onFormChange}
      value={fieldValues[field.name] || ""}
    />
  ));

export default memo(AppForm);
