import { Link, useRouteError } from "react-router-dom"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import "./style.scss"

function ErrorPage() {
  const error: any = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className="error-page">
      <h1 className="error-page__caption">Oops!</h1>
      <p className="error-page__description">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="error-page__error-content">
        {error.statusText || error.message}
      </p>
      <Link to="/">
        <ButtonDefault as="span">Go Home</ButtonDefault>
      </Link>
    </div>
  )
}

export default ErrorPage
