import classNames from "classnames"
import PropTypes from "prop-types"
import { useState } from "react"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import InputBox from "../InputBox/InputBox"
import { configInput } from "./data"
import "./style.scss"

function FormSignUp({ className, handleSignUp }) {
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

  const formClass = classNames("form-sign-up", className)

  return (
    <div className={formClass}>
      <h3 className="form-sign-up__caption">I dont have an account</h3>
      <p className="container-form-sing-up__description">
        Sing up with your email and password
      </p>

      <form
        className="form-sign-up__form"
        action="src/components/FormSignUp/FormSignUp.jsx"
        method="POST"
        onSubmit={handleSubmit}
      >
        <InputBox
          className="form-sign-up__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "name" })
          }}
          value={state.name}
          {...configInput.name}
        />
        <InputBox
          className="form-sign-up__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        />
        <InputBox
          className="form-sign-up__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "password" })
          }}
          value={state.password}
          {...configInput.password}
        />
        <InputBox
          className="form-sign-up__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "passwordConfirm" })
          }}
          value={state.passwordConfirm}
          {...configInput.passwordConfirm}
        />

        <div className="form-sign-up__button-box">
          <ButtonDefault className="form-sign-up__button-default" type="submit">
            Sign Up
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

FormSignUp.propTypes = {
  className: PropTypes.string,
  handleSignUp: PropTypes.func,
}

export default FormSignUp
