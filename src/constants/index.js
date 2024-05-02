export const registerFileds = [
  {
    name: "name",
    type: "text",
    placeholder: "full name",
    label: "Full name",
    required: true,
    minLength: 3,
    maxLength: 10,
    id: "fullName-register-form",
  },
  {
    name: "email",
    type: "email",
    placeholder: "abc@example.com",
    label: "Email address",
    required: true,
    id: "email-register-form",
  },
  {
    name: "gender",
    type: "select",
    placeholder: "male",
    label: "Gender",
    required: true,
    options: ["male", "female", "other"],
    id: "gender-register-form",
  },
  {
    name: "age",
    type: "number",
    placeholder: "18",
    label: "Age",
    required: true,
    min: 1,
    max: 100,
    id: "age-register-form",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Abc#1234",
    label: "Password",
    required: true,
    id: "password-register-form",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Abc#1234",
    label: "Confirm Password",
    required: true,
    id: "confirmPassword-register-form",
  },
];

export const loginFileds = [
  {
    name: "email",
    type: "email",
    placeholder: "abc@example.com",
    label: "Email address",
    required: true,
    id: "email-register-form",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Abc#1234",
    label: "Password",
    required: true,
    id: "password-register-form",
  },
];

export const contactUsFormFileds = [
  {
    name: "name",
    type: "text",
    placeholder: "full name",
    label: "Full name",
    required: true,
    minLength: 3,
    maxLength: 10,
    id: "fullName-contact-us-form",
  },
  {
    name: "email",
    type: "email",
    placeholder: "abc@example.com",
    label: "Email address",
    required: true,
    id: "email-contact-us-form",
  },
  {
   name: "phone",
    type: "number",
    placeholder: "1234567890",
    label: "Phone number",
    required: true,
    id: "phone-contact-us-form", 
  },
  {
    name: "subject",
    type: "text",
    placeholder: "subject",
    label: "Subject",
    required: true,
    id: "subject-contact-us-form",
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "message",
    label: "Message",
    required: true,
    id: "message-contact-us-form",
  },
  {
    name: "subscription",
    type: "checkbox",
    label: "Subscribe to our newsletter",
    id: "subscription-contact-us-form",
  }
];
