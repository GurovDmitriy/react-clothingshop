import React from "react"
import InputBox from "../../components/InputBox/InputBox"
import { configInput, configButton } from "./data"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import "./styles.scss"

class FormSignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleClickSign = () => {
    console.log("sign")
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(evt)
  }

  handleInput = (evt, { name }) => {
    this.setState({
      [name]: evt.target.value,
    })
  }

  render() {
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
          onSubmit={this.handleSubmit}
        >
          <InputBox
            onInput={(evt) => {
              this.handleInput(evt, { name: "email" })
            }}
            value={this.state.email}
            dataItem={configInput.email}
          />
          <InputBox
            oonInput={(evt) => {
              this.handleInput(evt, { name: "password" })
            }}
            value={this.state.password}
            dataItem={configInput.password}
          />

          <div className="form-sign-in__button-box">
            <ButtonDefault dataItem={configButton.signIn}>
              Sign in
            </ButtonDefault>
            <ButtonDefault
              dataItem={configButton.signGoogle}
              handleClick={() => this.handleClickSign()}
            >
              Sign in with Google
            </ButtonDefault>
          </div>
        </form>
      </div>
    )
  }
}

export default FormSignIn
