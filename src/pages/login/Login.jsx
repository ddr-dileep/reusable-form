import React, { useState } from "react";
import Heading from "../../components/heading/Heading";
import AppForm from "../../components/form/AppForm";
import Button from "../../components/button/Button";
import { loginFileds } from "../../constants";
import "./styles.scss";

const Login = () => {
  const [loginFormValues, setLoginFormValues] = useState({});

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormValues);
  };

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
  };

  return (
    <div className="login_page">
      <Heading title="Welcome back" />
      <AppForm
        fields={loginFileds}
        onFormChange={onFormChange}
        fieldValues={loginFormValues}
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
