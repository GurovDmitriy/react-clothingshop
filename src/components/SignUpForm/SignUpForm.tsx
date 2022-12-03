import classNames from "classnames"
import React, { useState } from "react"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import InputBox from "../InputBox/InputBox"
import { configInput } from "./data"
import "./style.scss"

function SignUpForm(props: SignUpFormProps) {
  const { className, handlerSignUp } = props

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const formClass = classNames("sign-up-form", className)

  function handlerInput(evt: HandlerInputEvt, name: HandlerInputPayload) {
    setState({
      ...state,
      [name]: evt.target.value,
    })
  }

  async function handlerSubmit(evt: HandlerSubmitEvt) {
    evt.preventDefault()
    handlerSignUp(state)
  }

  return (
    <div className={formClass}>
      <h3 className="sign-up-form__caption">I dont have an account</h3>
      <p className="sing-up-form__description">
        Sing up with your email and password
      </p>

      <form
        className="sign-up-form__form"
        action="src/components/SignUpForm/SignUpForm.tsx"
        method="POST"
        onSubmit={handlerSubmit}
      >
        <InputBox
          className="sign-up-form__input-box"
          onInput={(evt: HandlerInputEvt) => {
            handlerInput(evt, HandlerInputPayload.name)
          }}
          value={state.name}
          {...configInput.name}
        />
        <InputBox
          className="sign-up-form__input-box"
          onInput={(evt: HandlerInputEvt) => {
            handlerInput(evt, HandlerInputPayload.email)
          }}
          value={state.email}
          {...configInput.email}
        />
        <InputBox
          className="sign-up-form__input-box"
          onInput={(evt: HandlerInputEvt) => {
            handlerInput(evt, HandlerInputPayload.password)
          }}
          value={state.password}
          {...configInput.password}
        />
        <InputBox
          className="sign-up-form__input-box"
          onInput={(evt: HandlerInputEvt) => {
            handlerInput(evt, HandlerInputPayload.passwordConfirm)
          }}
          value={state.passwordConfirm}
          {...configInput.passwordConfirm}
        />

        <div className="sign-up-form__button-box">
          <ButtonDefault
            className="sign-up-form__button-default"
            as="button"
            type="submit"
          >
            Sign Up
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

enum HandlerInputPayload {
  name = "name",
  email = "email",
  password = "password",
  passwordConfirm = "passwordConfirm",
}

type SignUpFormProps = {
  className?: string
  handlerSignUp: (state: SignUpFormState) => void
}

type HandlerInputEvt = React.ChangeEvent<HTMLInputElement>
type HandlerSubmitEvt = React.FormEvent<HTMLFormElement>

type SignUpFormState = {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

export default SignUpForm
