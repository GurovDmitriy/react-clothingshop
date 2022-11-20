import classNames from "classnames"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import api from "../../api"
import FormSignIn from "../../components/FormSignIn/FormSignIn"
import { signInWithGoogleAction } from "../../store/auth/authAction"
import { createUserAction, fetchUserAction } from "../../store/user/userAction"

function FormSignInContainer({ className }) {
  const dispatch = useDispatch()

  async function handleSignIn(evt, methodSign, data) {
    switch (methodSign) {
      case "default":
        await handleSignInDefault(data)
        break

      case "google":
        await handleClickSignInWithGoogle()
        break

      default:
        return
    }
  }

  async function handleClickSignInWithGoogle() {
    const responseSign = await dispatch(signInWithGoogleAction())
    const responseUser = await dispatch(
      fetchUserAction(responseSign.payload.id)
    )

    if (!responseUser.payload || !responseUser.payload.id) {
      await dispatch(createUserAction(responseSign.payload))
    }
  }

  async function handleSignInDefault(data) {
    await api.auth.signIn({
      email: data.email,
      password: data.password,
    })
  }

  const formClass = classNames("form-sign-in-container", className)

  return <FormSignIn handleSignIn={handleSignIn} className={formClass} />
}

FormSignInContainer.propTypes = {
  className: PropTypes.string,
}

export default FormSignInContainer
