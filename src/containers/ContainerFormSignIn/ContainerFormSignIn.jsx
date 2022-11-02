import InputBox from "../../components/InputBox/InputBox"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import api from "../../api"
import { configInput } from "./data"
import "./styles.scss"
import { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

function ContainerFormSignIn({ className }) {
  const classesForm = classNames("container-form-sign-in", className)

  const [state, setState] = useState({
    email: "",
    password: "",
  })

  async function handleClickSign() {
    await api.auth.signInWithGoogle()
  }

  async function handleSubmit(evt) {
    evt.preventDefault()

    await api.auth.signIn({
      email: state.email,
      password: state.password,
    })
  }

  function handleInput(evt, { name }) {
    setState({
      ...state,
      [name]: evt.target.value,
    })
  }

  return (
    <div className={classesForm}>
      <h3 className="container-form-sign-in__caption">
        I already have an account
      </h3>
      <p className="container-form-sing-in__description">
        Sing in with your email and password
      </p>

      <form
        className="container-form-sign-in__form"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <InputBox
          className="container-form-sign-in__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        >
          Email
        </InputBox>
        <InputBox
          className="container-form-sign-in__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "password" })
          }}
          value={state.password}
          {...configInput.password}
        >
          Password
        </InputBox>

        <div className="container-form-sign-in__button-box">
          <ButtonDefault
            type="submit"
            className="container-form-sign-in__button-default"
          >
            Sign in
          </ButtonDefault>
          <ButtonDefault
            type="button"
            className="container-form-sign-in__button-default"
            handleClick={handleClickSign}
          >
            Sign in with Google
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

ContainerFormSignIn.propTypes = {
  className: PropTypes.string,
}

export default ContainerFormSignIn
