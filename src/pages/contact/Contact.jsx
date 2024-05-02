import React, { useState } from "react";
import Heading from "../../components/heading/Heading";
import AppForm from "../../components/form/AppForm";
import Button from "../../components/button/Button";
import { contactUsFormFileds } from "../../constants";

const Contact = () => {
  const [contactUsFormValues, setContactUsFormValues] = useState({});

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(contactUsFormValues);
  };

  const onFormChange = (e) => {
    const { name, value, checked, type } = e.target;
    setContactUsFormValues({
      ...contactUsFormValues,
      [name]: type !== "checkbox" ? value : checked,
    });
  };

  return (
    <div className="login_page">
      <Heading title="Get in touch with us" />
      <AppForm
        fields={contactUsFormFileds}
        onFormChange={onFormChange}
        fieldValues={contactUsFormValues}
      />
      <Button
        title="submit"
        onClick={onFormSubmit}
        className="w-100 py-2 btn-success"
      />
    </div>
  );
};

export default Contact;
