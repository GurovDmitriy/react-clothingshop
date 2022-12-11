import classNames from "classnames"
import SignInForm, {
  HandlerSubmitEvt,
  MethodSign,
  SignInFormState,
} from "../../components/SignInForm/SignInForm"
import {
  signInAction,
  signInWithGoogleAction,
} from "../../store/auth/authAction"
import { useAppDispatch } from "../../store/store"
import { createUserAction, fetchUserAction } from "../../store/user/userAction"

function SignInContainerForm(props: SignInContainerFormProps) {
  const { className } = props

  const dispatch = useAppDispatch()

  async function handlerSignIn(
    evt: HandlerSubmitEvt,
    methodSign: MethodSign,
    data: SignInFormState
  ) {
    switch (methodSign) {
      case MethodSign.default:
        await handleSignInDefault(data)
        break

      case MethodSign.google:
        await handleClickSignInWithGoogle()
        break

      default:
        return
    }
  }

  async function handleClickSignInWithGoogle() {
    const responseSign = await dispatch(signInWithGoogleAction())
    const responseUser = await dispatch(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fetchUserAction(responseSign?.payload?.id)
    )

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!responseUser.payload || !responseUser.payload.id) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await dispatch(createUserAction(responseSign.payload))
    }
  }

  async function handleSignInDefault(data: SignInFormState) {
    await dispatch(
      signInAction({
        email: data.email,
        password: data.password,
      })
    )
  }

  const formClass = classNames("sign-in-form-container", className)

  return <SignInForm handlerSignIn={handlerSignIn} className={formClass} />
}

type SignInContainerFormProps = {
  className?: string
}

export default SignInContainerForm