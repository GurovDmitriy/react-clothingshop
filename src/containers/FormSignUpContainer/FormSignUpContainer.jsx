import classNames from "classnames"
import PropTypes from "prop-types"
import { useState } from "react"
import { useDispatch } from "react-redux"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import InputBox from "../../components/InputBox/InputBox"
import { signUpAction } from "../../store/auth/authAction"
import { createUserAction } from "../../store/user/userAction"
import { configInput } from "./data"
import "./styles.scss"

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

    console.log(signUpResponse)

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

  const classesForm = classNames("container-form-sign-up", className)

  return (
    <div className={classesForm}>
      <h3 className="container-form-sign-up__caption">
        I dont have an account
      </h3>
      <p className="container-form-sing-up__description">
        Sing up with your email and password
      </p>

      <form
        className="container-form-sign-up__form"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <InputBox
          className="container-form-sign-up__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "name" })
          }}
          value={state.name}
          {...configInput.name}
        />
        <InputBox
          className="container-form-sign-up__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        />
        <InputBox
          className="container-form-sign-up__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "password" })
          }}
          value={state.password}
          {...configInput.password}
        />
        <InputBox
          className="container-form-sign-up__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "passwordConfirm" })
          }}
          value={state.passwordConfirm}
          {...configInput.passwordConfirm}
        />

        <div className="container-form-sign-up__button-box">
          <ButtonDefault
            className="container-form-sign-up__button-default"
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
