import classNames from "classnames"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { signUpAction } from "../../store/auth/authAction"
import { createUserAction } from "../../store/user/userAction"

function SignUpFormContainer(props) {
  const { className } = props

  const dispatch = useDispatch()

  async function handleSignUp(data) {
    if (data.password !== data.passwordConfirm) {
      alert("password don't match")
      return
    }

    const signUpResponse = await dispatch(
      signUpAction({
        email: data.email,
        password: data.password,
      })
    )

    await dispatch(
      createUserAction({
        id: signUpResponse.payload.id,
        displayName: data.name,
        email: data.email,
      })
    )
  }

  const formClass = classNames("sign-up-form-container", className)

  return <SignUpForm className={formClass} handleSignUp={handleSignUp} />
}

SignUpFormContainer.propTypes = {
  className: PropTypes.string,
}

export default SignUpFormContainer
