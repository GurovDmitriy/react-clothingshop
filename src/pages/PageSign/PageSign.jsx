import ContainerFormSignIn from "../../containers/ContainerFormSignIn/ContainerFormSignIn"
import "./styles.scss"
import ContainerFormSignUp from "../../containers/ContainerFormSignUp/ContainerFormSignUp"

function PageSign() {
  return (
    <section className="page-sign">
      <h2 className="page-sign__caption">Form Sign in and Sign up</h2>
      <ContainerFormSignIn lassName="page-sign__container-form-sign-in" />
      <ContainerFormSignUp lassName="page-sign__container-form-sign-up" />
    </section>
  )
}

export default PageSign
