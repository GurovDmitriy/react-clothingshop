import React from "react"
import classNames from "classnames"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { signUpAction } from "../../store/auth/authAction"
import { createUserAction } from "../../store/user/userAction"
import { useAppDispatch } from "../../store/hooks";

function SignUpFormContainer(props: SignUpFormContainerProps) {
  const { className } = props

  const dispatch = useAppDispatch()

  async function handlerSignUp(data: SignUpFormFields) {
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

  return <SignUpForm className={formClass} handlerSignUp={handlerSignUp} />
}

type SignUpFormFields = {
  displayName: string
  email: string
  password: string
  passwordConfirm: string
}

type SignUpFormContainerProps = {
  className: string,
}

export default SignUpFormContainer
