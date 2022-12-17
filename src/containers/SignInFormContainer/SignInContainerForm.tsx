import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import SignInForm, {
  HandlerSubmitEvt,
  MethodSign,
  SignInFormState,
} from "../../components/SignInForm/SignInForm"
import { StoreContext } from "../../providers/StoreContext/StoreContext"

const SignInContainerForm = observer(function SignInContainerForm(
  props: SignInContainerFormProps
) {
  const { className } = props

  const store = useContext(StoreContext)

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const responseSign = await store.auth.signInWithGoogle()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const responseUser = await store.user.fetchUser(responseSign?.payload?.id)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!responseUser.payload || !responseUser.payload.id) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const responseUser = await store.user.createUser(responseSign.payload)
    }
  }

  async function handleSignInDefault(data: SignInFormState) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await store.auth.signIn({
      email: data.email,
      password: data.password,
    })
  }

  const formClass = classNames("sign-in-form-container", className)

  return <SignInForm handlerSignIn={handlerSignIn} className={formClass} />
})

type SignInContainerFormProps = {
  className?: string
}

export default SignInContainerForm
