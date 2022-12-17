import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import SignUpForm, {
  SignUpFormState,
} from "../../components/SignUpForm/SignUpForm"
import { StoreContext } from "../../providers/StoreContext/StoreContext"

function SignUpFormContainer(props: SignUpFormContainerProps) {
  const { className } = props

  const store = useContext(StoreContext)

  async function handlerSignUp(data: SignUpFormState) {
    if (data.password !== data.passwordConfirm) {
      alert("password don't match")
      return
    }

    const signUpResponse = await store.auth.signUp({
      email: data.email,
      password: data.password,
    })

    if (signUpResponse && signUpResponse.uid) {
      await store.user.createUser({
        id: signUpResponse.uid,
        displayName: data.name,
        email: data.email,
      })
    }
  }

  const formClass = classNames("sign-up-form-container", className)

  return <SignUpForm className={formClass} handlerSignUp={handlerSignUp} />
}

type SignUpFormContainerProps = {
  className: string
}

export default observer(SignUpFormContainer)
