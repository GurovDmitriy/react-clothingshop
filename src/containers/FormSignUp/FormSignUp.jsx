import React from "react"
import InputBox from "../../components/InputBox/InputBox"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import { configInput, configButton } from "./data"
import api from "../../api"
import "./styles.scss"

class FormSignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    }
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    await api.auth.createUser({
      email: this.state.email,
      password: this.state.password,
    })
  }

  handleInput = (evt, { name }) => {
    this.setState({
      [name]: evt.target.value,
    })
  }

  render() {
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
          onSubmit={this.handleSubmit}
        >
          <InputBox
            onInput={(evt) => {
              this.handleInput(evt, { name: "name" })
            }}
            value={this.state.name}
            dataItem={configInput.name}
          />
          <InputBox
            onInput={(evt) => {
              this.handleInput(evt, { name: "email" })
            }}
            value={this.state.email}
            dataItem={configInput.email}
          />
          <InputBox
            onInput={(evt) => {
              this.handleInput(evt, { name: "password" })
            }}
            value={this.state.password}
            dataItem={configInput.password}
          />
          <InputBox
            onInput={(evt) => {
              this.handleInput(evt, { name: "passwordConfirm" })
            }}
            value={this.state.passwordConfirm}
            dataItem={configInput.passwordConfirm}
          />

          <div className="form-sign-up__button-box">
            <ButtonDefault dataItem={configButton.signUp}>
              Sign Up
            </ButtonDefault>
          </div>
        </form>
      </div>
    )
  }
}

export default FormSignUp
