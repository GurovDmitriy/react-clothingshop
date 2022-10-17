import React from "react"

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
          <input
            onInput={this.handleInput}
            type="email"
            name="email"
            placeholder="email"
            id="email-field"
            required={true}
            value={this.state.email}
          />
          <input
            onInput={this.handleInput}
            type="password"
            name="password"
            placeholder="password"
            id="password-field"
            required={true}
            value={this.state.password}
          />

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default FormSignIn
