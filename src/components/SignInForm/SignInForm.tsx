import classNames from "classnames"
import React, { useState } from "react"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import InputBox from "../InputBox/InputBox"
import { configInput } from "./data"
import "./style.scss"

function SignInForm(props: SignInFormProps) {
  const { className, handlerSignIn } = props

  const [state, setState] = useState({
    email: "",
    password: "",
  })

  function handlerInput(evt: HandlerInputEvt, name: HandlerInputPayload) {
    setState({
      ...state,
      [name]: evt.target.value,
    })
  }

  async function handlerSubmit(evt: HandlerSubmitEvt, methodSign: MethodSign) {
    evt.preventDefault()
    handlerSignIn(evt, methodSign, state)
  }

  const formClass = classNames("sign-in-form", className)

  return (
    <div className={formClass}>
      <h3 className="sign-in-form__caption">I already have an account</h3>
      <p className="container-form-sing-in__description">
        Sing in with your email and password
      </p>

      <form
        className="sign-in-form__form"
        action="src/components/SignInForm/SignInForm.tsx"
        method="POST"
        onSubmit={(evt) => handlerSubmit(evt, MethodSign.default)}
      >
        <InputBox
          className="sign-in-form__input-box"
          onInput={(evt: HandlerInputEvt) => {
            handlerInput(evt, HandlerInputPayload.email)
          }}
          value={state.email}
          {...configInput.email}
        >
          Email
        </InputBox>
        <InputBox
          className="sign-in-form__input-box"
          onInput={(evt: HandlerInputEvt) => {
            handlerInput(evt, HandlerInputPayload.password)
          }}
          value={state.password}
          {...configInput.password}
        >
          Password
        </InputBox>

        <div className="sign-in-form__button-box">
          <ButtonDefault
            as="button"
            type="submit"
            className="sign-in-form__button-default"
          >
            Sign in
          </ButtonDefault>
          <ButtonDefault
            as="button"
            type="button"
            className="sign-in-form__button-default"
            handlerClick={(evt: HandlerSubmitEvt) =>
              handlerSubmit(evt, MethodSign.google)
            }
          >
            Sign in with Google
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

enum HandlerInputPayload {
  email = "email",
  password = "password",
}

export enum MethodSign {
  default = "default",
  google = "google",
}

type HandlerInputEvt = React.ChangeEvent<HTMLInputElement>
export type HandlerSubmitEvt = React.FormEvent<HTMLFormElement>

export type SignInFormState = {
  email: string
  password: string
}

type SignInFormProps = {
  className: string
  handlerSignIn: (
    evt: HandlerSubmitEvt,
    methodSign: MethodSign,
    state: SignInFormState
  ) => void
}

export default SignInForm
