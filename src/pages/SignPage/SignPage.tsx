import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SignInContainerForm from "../../containers/SignInFormContainer/SignInContainerForm"
import SignUpFormContainer from "../../containers/SignUpFormContainer/SignUpFormContainer"
import { StoreContext } from "../../providers/StoreContext/StoreContext"
import "./style.scss"

const SignPage = observer(function SignPage() {
  const store = useContext(StoreContext)
  const navigate = useNavigate()

  const authState = store.auth.entities
  const authStatusFetch = store.auth.status

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
})

export default SignPage
