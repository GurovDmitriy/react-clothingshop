import classNames from "classnames"
import PropTypes from "prop-types"
import { useState } from "react"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import InputBox from "../InputBox/InputBox"
import { configInput } from "./data"
import "./style.scss"

function SignUpForm(props) {
  const { className, handleSignUp } = props

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  function handleInput(evt, { name }) {
    setState({
      ...state,
      [name]: evt.target.value,
    })
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    handleSignUp(state)
  }

  const formClass = classNames("sign-up-form", className)

  return (
    <div className={formClass}>
      <h3 className="sign-up-form__caption">I dont have an account</h3>
      <p className="sing-up-form__description">
        Sing up with your email and password
      </p>

      <form
        className="sign-up-form__form"
        action="src/components/SignUpForm/SignUpForm.jsx"
        method="POST"
        onSubmit={handleSubmit}
      >
        <InputBox
          className="sign-up-form__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "name" })
          }}
          value={state.name}
          {...configInput.name}
        />
        <InputBox
          className="sign-up-form__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        />
        <InputBox
          className="sign-up-form__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "password" })
          }}
          value={state.password}
          {...configInput.password}
        />
        <InputBox
          className="sign-up-form__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "passwordConfirm" })
          }}
          value={state.passwordConfirm}
          {...configInput.passwordConfirm}
        />

        <div className="sign-up-form__button-box">
          <ButtonDefault className="sign-up-form__button-default" type="submit">
            Sign Up
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

SignUpForm.propTypes = {
  className: PropTypes.string,
  handleSignUp: PropTypes.func,
}

export default SignUpForm
