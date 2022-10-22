export const configInput = {
  name: {
    type: "name",
    name: "name",
    id: "form-sign-up-name-field",
    required: true,
    placeholder: "Display Name",
    label: "Display Name",
    isVisibleLabel: false,
    className: "form-sign-up",
  },
  email: {
    type: "email",
    name: "email",
    id: "form-sign-up-email-field",
    required: true,
    placeholder: "email",
    label: "email",
    isVisibleLabel: false,
    className: "form-sign-up",
  },
  password: {
    type: "password",
    name: "password",
    id: "form-sign-up-password-field",
    required: true,
    placeholder: "password",
    label: "password",
    isVisibleLabel: false,
    className: "form-sign-up",
  },
  passwordConfirm: {
    type: "password",
    name: "password-confirm",
    id: "form-sign-up-password-confirm-field",
    required: true,
    placeholder: "Confirm Password",
    label: "Confirm Password",
    isVisibleLabel: false,
    className: "form-sign-up",
  },
}

export const configButton = {
  signUp: {
    id: 1,
    label: null,
    value: "signUp",
    tag: "button",
    href: null,
    target: null,
    type: "submit",
    to: null,
    customClass: "form-sign-up",
  },
}