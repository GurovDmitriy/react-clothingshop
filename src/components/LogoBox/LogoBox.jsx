import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function LogoBox({ dataItem }) {
  return (
    <div className="logo-box">
      <Link className="logo-box__link" to={dataItem.to}>
        {dataItem.logo}
      </Link>
    </div>
  )
}

LogoBox.defaultProps = {
  dataItem: {},
}

LogoBox.propTypes = {
  dataItem: PropTypes.object,
}

export default LogoBox
