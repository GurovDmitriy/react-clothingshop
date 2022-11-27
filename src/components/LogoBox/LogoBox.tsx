import classNames from "classnames"
import { Link } from "react-router-dom"

LogoBox.defaultProps = {
  to: "/",
}

type LogoBoxProps = {
  to?: string
  children: JSX.Element | string
  className?: string
} & typeof LogoBox.defaultProps

function LogoBox(props: LogoBoxProps) {
  const { className, to, children } = props

  const logoBoxClass = classNames("logo-box", className)

  return (
    <div className={logoBoxClass}>
      <Link className="logo-box__link" to={to}>
        {children}
      </Link>
    </div>
  )
}

export default LogoBox
