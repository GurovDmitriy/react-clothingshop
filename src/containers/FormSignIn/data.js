export const configInput = {
  email: {
    type: "email",
    name: "email",
    id: "form-sign-in-email-field",
    required: true,
    placeholder: "email",
    label: "email",
    isVisibleLabel: false,
    className: "form-sign-in",
  },
  password: {
    type: "password",
    name: "password",
    id: "form-sign-in-password-field",
    required: true,
    placeholder: "password",
    label: "password",
    isVisibleLabel: false,
    className: "form-sign-in",
  },
}

export const configButton = {
  signIn: {
    id: 1,
    label: null,
    value: "signIn",
    tag: "button",
    href: null,
    target: null,
    type: "submit",
    to: null,
    customClass: "form-sign-in",
  },
  signGoogle: {
    id: 2,
    label: null,
    value: "signGoogle",
    tag: "button",
    href: null,
    target: null,
    type: "button",
    to: null,
    customClass: "form-sign-in",
  },
}
