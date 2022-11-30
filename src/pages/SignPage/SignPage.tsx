import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SignInContainerForm from "../../containers/SignInFormContainer/SignInContainerForm"
import SignUpFormContainer from "../../containers/SignUpFormContainer/SignUpFormContainer"
import {
  selectAuth,
  selectAuthStatusFetch,
} from "../../store/auth/authSelector"
import { useAppSelector } from "../../store/hooks"
import "./style.scss"

function SignPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const authState = useAppSelector(selectAuth)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const authStatusFetch = useAppSelector(selectAuthStatusFetch)
  const navigate = useNavigate()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (authState && authState.id) {
      navigate("/")
    }
  }, [authStatusFetch])

  return (
    <section className="page-sign">
      <h2 className="page-sign__caption">Form Sign in and Sign up</h2>
      <SignInContainerForm className="page-sign__container-sign-in-form" />
      <SignUpFormContainer className="page-sign__container-sign-up-form" />
    </section>
  )
}

export default SignPage
