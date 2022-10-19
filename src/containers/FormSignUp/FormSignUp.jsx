import React from "react"
import InputBox from "../../components/InputBox/InputBox"
import { configInput, configButton } from "./data"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
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

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(evt)
  }

  handleInput = (evt) => {
    const { value, name } = evt.target
    this.setState({
      [name]: value,
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
            onInput={this.handleInput}
            value={this.state.email}
            dataItem={configInput.name}
          />
          <InputBox
            onInput={this.handleInput}
            value={this.state.email}
            dataItem={configInput.email}
          />
          <InputBox
            onInput={this.handleInput}
            value={this.state.password}
            dataItem={configInput.password}
          />
          <InputBox
            onInput={this.handleInput}
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
