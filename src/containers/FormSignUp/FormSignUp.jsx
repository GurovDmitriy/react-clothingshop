import InputBox from "../../components/InputBox/InputBox"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import { configInput, configButton } from "./data"
import api from "../../api"
import "./styles.scss"
import { useState } from "react"

function FormSignUp() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  async function handleSubmit(evt) {
    evt.preventDefault()

    await api.auth.createUser({
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
    <div className="form-sign-up">
      <h3 className="form-sign-up__caption">I dont have an account</h3>
      <p className="form-sing-up__description">
        Sing up with your email and password
      </p>

      <form
        className="form-sign-up__form"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <InputBox
          onInput={(evt) => {
            handleInput(evt, { name: "name" })
          }}
          value={state.name}
          dataItem={configInput.name}
        />
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
        <InputBox
          onInput={(evt) => {
            handleInput(evt, { name: "passwordConfirm" })
          }}
          value={state.passwordConfirm}
          dataItem={configInput.passwordConfirm}
        />

        <div className="form-sign-up__button-box">
          <ButtonDefault dataItem={configButton.signUp}>Sign Up</ButtonDefault>
        </div>
      </form>
    </div>
  )
}

export default FormSignUp
