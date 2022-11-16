import classNames from "classnames"
import PropTypes from "prop-types"
import { useState } from "react"
import { useDispatch } from "react-redux"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import InputBox from "../../components/InputBox/InputBox"
import { signUpAction } from "../../store/auth/authAction"
import { createUserAction } from "../../store/user/userAction"
import { configInput } from "./data"
import "./style.scss"

function FormSignUpContainer({ className }) {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  async function handleSubmit(evt) {
    evt.preventDefault()

    if (state.password !== state.passwordConfirm) {
      alert("password don't match")
      return
    }

    const signUpResponse = await dispatch(
      signUpAction({
        email: state.email,
        password: state.password,
      })
    )

    await dispatch(
      createUserAction({
        id: signUpResponse.payload.id,
        displayName: state.name,
        email: state.email,
      })
    )
  }

  function handleInput(evt, { name }) {
    setState({
      ...state,
      [name]: evt.target.value,
    })
  }

  const classesForm = classNames("form-sign-up-container", className)

  return (
    <div className={classesForm}>
      <h3 className="form-sign-up-container__caption">
        I dont have an account
      </h3>
      <p className="container-form-sing-up__description">
        Sing up with your email and password
      </p>

      <form
        className="form-sign-up-container__form"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <InputBox
          className="form-sign-up-container__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "name" })
          }}
          value={state.name}
          {...configInput.name}
        />
        <InputBox
          className="form-sign-up-container__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        />
        <InputBox
          className="form-sign-up-container__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "password" })
          }}
          value={state.password}
          {...configInput.password}
        />
        <InputBox
          className="form-sign-up-container__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "passwordConfirm" })
          }}
          value={state.passwordConfirm}
          {...configInput.passwordConfirm}
        />

        <div className="form-sign-up-container__button-box">
          <ButtonDefault
            className="form-sign-up-container__button-default"
            type="submit"
          >
            Sign Up
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

FormSignUpContainer.propTypes = {
  className: PropTypes.string,
}

export default FormSignUpContainer
