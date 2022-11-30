import classNames from "classnames"
import { useState } from "react"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import InputBox from "../InputBox/InputBox"
import { configInput } from "./data"
import "./style.scss"
import React from "react"

function SignUpForm(props: SignUpFormProps) {
  const { className, handlerSignUp } = props

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const formClass = classNames("sign-up-form", className)

  function handlerInput(
    evt: handleInputEvtType,
    { name }: handlerInputPayload
  ) {
    setState({
      ...state,
      [name]: evt.target.value,
    })
  }

  async function handlerSubmit(evt: { preventDefault: () => void }) {
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onInput={(evt: handleInputEvtType) => {
            handlerInput(evt, { name: "name" })
          }}
          value={state.name}
          {...configInput.name}
        />
        <InputBox
          className="sign-up-form__input-box"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onInput={(evt: handleInputEvtType) => {
            handlerInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        />
        <InputBox
          className="sign-up-form__input-box"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onInput={(evt: handleInputEvtType) => {
            handlerInput(evt, { name: "password" })
          }}
          value={state.password}
          {...configInput.password}
        />
        <InputBox
          className="sign-up-form__input-box"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onInput={(evt: handleInputEvtType) => {
            handlerInput(evt, { name: "passwordConfirm" })
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

type SignUpFormProps = {
  className?: string
  handlerSignUp: (state: SignUpFormStateType) => void
}

type handleInputEvtType = {
  target: {
    value: any
  }
}

type handlerInputPayload = {
  name: string
}

type SignUpFormStateType = {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

export default SignUpForm
