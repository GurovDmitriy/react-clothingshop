import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function LogoBox({ className, to, children }) {
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

LogoBox.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
}

export default LogoBox
