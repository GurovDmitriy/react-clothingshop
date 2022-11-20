import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FormSignInContainer from "../../containers/FormSignInContainer/FormSignInContainer"
import FormSignUpContainer from "../../containers/FormSignUpContainer/FormSignUpContainer"
import {
  selectAuth,
  selectAuthStatusFetch,
} from "../../store/auth/authSelector"
import "./style.scss"

function SignPage() {
  const authState = useSelector(selectAuth)
  const authStatusFetch = useSelector(selectAuthStatusFetch)
  const navigate = useNavigate()

  useEffect(() => {
    if (authState && authState.id) {
      navigate("/")
    }
  }, [authStatusFetch])

  return (
    <section className="page-sign">
      <h2 className="page-sign__caption">Form Sign in and Sign up</h2>
      <FormSignInContainer className="page-sign__container-form-sign-in" />
      <FormSignUpContainer className="page-sign__container-form-sign-up" />
    </section>
  )
}

export default SignPage
