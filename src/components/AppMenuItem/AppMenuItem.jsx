import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./index.scss"

function AppMenuItem(props) {
  const { caption, description, link } = props.dataItem

  return (
    <div className="menu-item">
      <div className="menu-item__box-content">
        <h2 className="menu-item__caption">{caption}</h2>
        <p className="menu-item__description">{description}</p>
        <Link to={link}>go to</Link>
      </div>
    </div>
  )
}

AppMenuItem.defaultProps = {
  dataItem: {},
}

AppMenuItem.propTypes = {
  dataItem: PropTypes.object,
}

export default AppMenuItem
