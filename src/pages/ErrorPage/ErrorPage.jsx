import { useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="page-error" className="page-error">
      <h1 className="page-error__caption">Oops!</h1>
      <p className="page-error__description">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="page-error__error-content">
        {error.statusText || error.message}
      </p>
    </div>
  )
}

export default ErrorPage
