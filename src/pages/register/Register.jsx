import React, { useState } from "react";
import AppForm from "../../components/form/AppForm";
import { registerFileds } from "../../constants";
import Heading from "../../components/heading/Heading";
import "./styles.scss";
import Button from "../../components/button/Button";

const Register = () => {
  const [registerFormValues, setRegisterFormValues] = useState({});

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(registerFormValues);
  };

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormValues({
      ...registerFormValues,
      [name]: value,
    });
  };

  return (
    <div className="register_page">
      <Heading title="Register now" />
      <AppForm
        fields={registerFileds}
        onFormChange={onFormChange}
        fieldValues={registerFormValues}
      />
      <Button
        title="Register now"
        onClick={onFormSubmit}
        className="w-100 py-2 btn-success"
      />
    </div>
  );
};

export default Register;
