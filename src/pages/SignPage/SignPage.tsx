import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SignInContainerForm from "../../containers/SignInFormContainer/SignInContainerForm"
import SignUpFormContainer from "../../containers/SignUpFormContainer/SignUpFormContainer"
import {
  selectAuth,
  selectAuthStatusFetch,
} from "../../store/auth/authSelector"
import { useAppSelector } from "../../store/store"
import "./style.scss"

function SignPage() {
  const authState = useAppSelector(selectAuth)
  const authStatusFetch = useAppSelector(selectAuthStatusFetch)
  const navigate = useNavigate()

  useEffect(() => {
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
