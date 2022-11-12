import { useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
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
    </div>
  )
}

export default ErrorPage
