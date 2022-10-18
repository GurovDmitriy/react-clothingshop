import React from "react"
import InputBox from "../../components/InputBox/InputBox"
import { configInput } from "../../components/InputBox/data"

class FormSignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log(evt)
  }

  handleInput(evt) {
    const { value, name } = evt.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="form-sing-in">
        <p className="form-sign-in__caption">I already have an account</p>
        <span className="form-sing-in__description">
          Sing in with your email and password
        </span>

        <form
          className="form-sign-in__form"
          action=""
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <InputBox
            onInput={this.handleInput}
            value={this.state.email}
            config={configInput.email}
          />
          <InputBox
            onInput={this.handleInput}
            value={this.state.password}
            config={configInput.password}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default FormSignIn
