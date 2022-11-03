import FormSignUpContainer from "../../containers/ContainerFormSignUp/FormSignUpContainer"
import FormSignInContainer from "../../containers/FormSignInContainer/FormSignInContainer"
import "./styles.scss"

function SignPage() {
  return (
    <section className="page-sign">
      <h2 className="page-sign__caption">Form Sign in and Sign up</h2>
      <FormSignInContainer lassName="page-sign__container-form-sign-in" />
      <FormSignUpContainer lassName="page-sign__container-form-sign-up" />
    </section>
  )
}

export default SignPage
