import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"

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

LogoBox.defaultProps = {
  to: "/",
}

type LogoBoxProps = {
  to: string
  children: JSX.Element | string
  className?: string
}

export default LogoBox
