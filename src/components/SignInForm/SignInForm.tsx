import classNames from "classnames"
import React, { useState } from "react"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import InputBox from "../InputBox/InputBox"
import { configInput } from "./data"
import "./style.scss"

function SignInForm(props: SignInFormPropsType) {
  const { className, handlerSignIn } = props

  const [state, setState] = useState({
    email: "",
    password: "",
  })

  function handlerInput(
    evt: HandlerInputEvtType,
    name: { name: string }
  ) {
    setState({
      ...state,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [name]: evt.target.value,
    })
  }

  async function handlerSubmit(
    evt: React.FormEvent<HTMLFormElement>,
    methodSign: string
  ) {
    evt.preventDefault()
    handlerSignIn(evt, methodSign as "default" | "google", state)
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
        onSubmit={(evt) => handlerSubmit(evt, "default")}
      >
        <InputBox
          className="sign-in-form__input-box"
          onInput={(evt) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            handlerInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        >
          Email
        </InputBox>
        <InputBox
          className="sign-in-form__input-box"
          onInput={(evt) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            handlerInput(evt, {name: "password"})
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
            handlerClick={(evt: React.FormEvent<HTMLFormElement>) =>
              handlerSubmit(evt, "google")
            }
          >
            Sign in with Google
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

type SignInFormStateType = {
  email: string
  password: string
}

type SignInFormPropsType = {
  className: string
  handlerSignIn: (
    evt: React.FormEvent<HTMLFormElement>,
    methodSign: MethodSignType,
    state: SignInFormStateType
  ) => void
}

type HandlerInputEvtType = {
  target: {
    value: any
  }
}

type HandlerInputPayloadType = {
  name: "email" | "password"
}

type MethodSignType = "default" | "google"

export default SignInForm
