import InputBox from "../../components/InputBox/InputBox"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import api from "../../api"
import { configInput, configButton } from "./data"
import "./styles.scss"
import { useState } from "react"

function FormSignIn() {
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
    <div className="form-sign-in">
      <h3 className="form-sign-in__caption">I already have an account</h3>
      <p className="form-sing-in__description">
        Sing in with your email and password
      </p>

      <form
        className="form-sign-in__form"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <InputBox
          onInput={(evt) => {
            handleInput(evt, { name: "email" })
          }}
          value={state.email}
          dataItem={configInput.email}
        />
        <InputBox
          onInput={(evt) => {
            handleInput(evt, { name: "password" })
          }}
          value={state.password}
          dataItem={configInput.password}
        />

        <div className="form-sign-in__button-box">
          <ButtonDefault
            dataItem={configButton.signIn}
            handleClick={handleSubmit}
          >
            Sign in
          </ButtonDefault>
          <ButtonDefault
            dataItem={configButton.signGoogle}
            handleClick={handleClickSign}
          >
            Sign in with Google
          </ButtonDefault>
        </div>
      </form>
    </div>
  )
}

export default FormSignIn
