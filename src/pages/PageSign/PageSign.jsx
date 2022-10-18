import FormSignIn from "../../containers/FormSignIn/FormSignIn"
import "./styles.scss"

function PageSign() {
  return (
    <section className="page-sign">
      <h2 className="page-sign__caption">Form Sign in and Sign up</h2>
      <FormSignIn />
    </section>
  )
}

export default PageSign
