import React, { useState } from "react";
import Heading from "../../components/heading/Heading";
import AppForm from "../../components/form/AppForm";
import Button from "../../components/button/Button";
import { loginFileds } from "../../constants";
import "./styles.scss";

const Login = () => {
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
    <div className="login_page">
      <Heading title="Welcome back" />
      <AppForm
        fields={loginFileds}
        onFormChange={onFormChange}
        fieldValues={registerFormValues}
      />
      <Button
        title="Login"
        onClick={onFormSubmit}
        className="w-100 py-2 btn-success"
      />
    </div>
  );
};

export default Login;
