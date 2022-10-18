import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./styles.scss"

function MenuItem({ dataItem }) {
  return (
    <div
      className="menu-item"
      style={{ backgroundImage: `url(${dataItem.image})` }}
    >
      <Link to={dataItem.link} className="menu-item__box-content">
        <div className="menu-item__caption">{dataItem.caption}</div>
        <div className="menu-item__description">{dataItem.description}</div>
      </Link>
    </div>
  )
}

MenuItem.defaultProps = {
  dataItem: {},
}

MenuItem.propTypes = {
  dataItem: PropTypes.object,
}

export default MenuItem
