import { useRouteError } from "react-router-dom"

function PageError() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="page-error">
      <h1>Oops!</h1>
      <p>Soory, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default PageError
