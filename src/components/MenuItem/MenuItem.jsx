import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./styles.scss"

function MenuItem(props) {
  const { caption, description, link, image } = props.dataItem

  return (
    <div className="menu-item" style={{ backgroundImage: `url(${image})` }}>
      <Link to={link} className="menu-item__box-content">
        <div className="menu-item__caption">{caption}</div>
        <div className="menu-item__description">{description}</div>
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
