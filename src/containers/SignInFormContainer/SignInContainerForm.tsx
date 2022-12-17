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
    const responseSign = await store.auth.signInWithGoogle()
    const responseUser = await store.user.fetchUser()
    if (!responseUser || !responseUser.id) {
      await store.user.createUser(responseSign?.user)
    }
  }

  async function handleSignInDefault(data: SignInFormState) {
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
