import classNames from "classnames"
import PropTypes from "prop-types"
import { useState } from "react"
import { useDispatch } from "react-redux"
import api from "../../api"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import InputBox from "../../components/InputBox/InputBox"
import { signInWithGoogleAction } from "../../store/auth/authAction"
import { createUserAction, fetchUserAction } from "../../store/user/userAction"
import { configInput } from "./data"
import "./style.scss"

function FormSignInContainer({ className }) {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    email: "",
    password: "",
  })

  async function handleClickSignWithGoogle() {
    const responseSign = await dispatch(signInWithGoogleAction())
    const responseUser = await dispatch(
      fetchUserAction(responseSign.payload.id)
    )

    if (!responseUser.payload || !responseUser.payload.id) {
      await dispatch(createUserAction(responseSign.payload))
    }
  }

  async function handleSignIn(evt) {
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

  const classesForm = classNames("form-sign-in-container", className)

  return (
    <div className={classesForm}>
      <h3 className="form-sign-in-container__caption">
        I already have an account
      </h3>
      <p className="container-form-sing-in__description">
        Sing in with your email and password
      </p>

      <form
        className="form-sign-in-container__form"
        action=""
        method="POST"
        onSubmit={handleSignIn}
      >
        <InputBox
          className="form-sign-in-container__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "email" })
          }}
          value={state.email}
          {...configInput.email}
        >
          Email
        </InputBox>
        <InputBox
          className="form-sign-in-container__input-box"
          onInput={(evt) => {
            handleInput(evt, { name: "password" })
          }}
          value={state.password}
          {...configInput.password}
        >
          Password
        </InputBox>

        <div className="form-sign-in-container__button-box">
          <ButtonDefault
            type="submit"
            className="form-sign-in-container__button-default"
          >
            Sign in
          </ButtonDefault>
          <ButtonDefault
            type="button"
            className="form-sign-in-container__button-default"
            handleClick={handleClickSignWithGoogle}
          >
            Sign in with Google
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

FormSignInContainer.propTypes = {
  className: PropTypes.string,
}

export default FormSignInContainer
