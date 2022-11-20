import classNames from "classnames"
import PropTypes from "prop-types"
import { useState } from "react"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import InputBox from "../InputBox/InputBox"
import { configInput } from "./data"
import "./style.scss"

function FormSignIn({ className, handleSignIn }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  })

  function handleInput(evt, { name }) {
    setState({
      ...state,
      [name]: evt.target.value,
    })
  }

  async function handleSubmit(evt, methodSign) {
    evt.preventDefault()
    handleSignIn(evt, methodSign, state)
  }

  const formClass = classNames("form-sign-in", className)

  return (
    <div className={formClass}>
      <h3 className="form-sign-in__caption">I already have an account</h3>
      <p className="container-form-sing-in__description">
        Sing in with your email and password
      </p>

      <form
        className="form-sign-in__form"
        action="src/components/FormSignIn/FormSignIn.jsx"
        method="POST"
        onSubmit={(evt) => handleSubmit(evt, "default")}
      >
        <InputBox
          className="form-sign-in__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        >
          Email
        </InputBox>
        <InputBox
          className="form-sign-in__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "password" })
          }}
          value={state.password}
          {...configInput.password}
        >
          Password
        </InputBox>

        <div className="form-sign-in__button-box">
          <ButtonDefault type="submit" className="form-sign-in__button-default">
            Sign in
          </ButtonDefault>
          <ButtonDefault
            type="button"
            className="form-sign-in__button-default"
            handleClick={(evt) => handleSubmit(evt, "google")}
          >
            Sign in with Google
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

FormSignIn.propTypes = {
  className: PropTypes.string,
  handleSignIn: PropTypes.func,
}

export default FormSignIn
