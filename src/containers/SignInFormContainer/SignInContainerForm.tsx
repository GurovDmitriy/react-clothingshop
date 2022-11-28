import classNames from "classnames"
import api from "../../api/api"
import SignInForm from "../../components/SignInForm/SignInForm"
import { signInWithGoogleAction } from "../../store/auth/authAction"
import { createUserAction, fetchUserAction } from "../../store/user/userAction"
import {useAppDispatch} from "../../store/hooks";

function SignInContainerForm(props: SignInContainerFormPropsType) {
  const { className } = props

  const dispatch = useAppDispatch()

  async function handlerSignIn(evt: any, methodSign: any, data: any) {
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

  async function handleSignInDefault(data: HandleSignInDefaultDataType) {
    await api.auth.signIn({
      email: data.email,
      password: data.password,
    })
  }

  const formClass = classNames("sign-in-form-container", className)

  return <SignInForm handlerSignIn={handlerSignIn} className={formClass} />
}

type SignInContainerFormPropsType = {
  className?: string
}

type HandleSignInDefaultDataType = {
  email: string
  password: string
}

export default SignInContainerForm
