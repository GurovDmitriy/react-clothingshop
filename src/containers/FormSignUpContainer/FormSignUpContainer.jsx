import classNames from "classnames"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import FormSignUp from "../../components/FormSignUp/FormSignUp"
import { signUpAction } from "../../store/auth/authAction"
import { createUserAction } from "../../store/user/userAction"

function FormSignUpContainer({ className }) {
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

  const formClass = classNames("form-sign-up-container", className)

  return <FormSignUp className={formClass} handleSignUp={handleSignUp} />
}

FormSignUpContainer.propTypes = {
  className: PropTypes.string,
}

export default FormSignUpContainer
