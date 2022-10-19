import FormSignIn from "../../containers/FormSignIn/FormSignIn"
import "./styles.scss"
import FormSignUp from "../../containers/FormSignUp/FormSignUp"

function PageSign() {
  return (
    <section className="page-sign">
      <h2 className="page-sign__caption">Form Sign in and Sign up</h2>
      <FormSignIn />
      <FormSignUp />
    </section>
  )
}

export default PageSign
