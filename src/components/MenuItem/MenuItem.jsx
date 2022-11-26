import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./style.scss"

function MenuItem(props) {
  const { entities, className, ...propsMenu } = props

  const menuClass = classNames("menu-item", className)

  return (
    <div className={menuClass} {...propsMenu}>
      <Link to={entities.link} className="menu-item__box-content">
        <div className="menu-item__caption">{entities.caption}</div>
        <div className="menu-item__description">{entities.description}</div>
      </Link>
    </div>
  )
}

MenuItem.defaultProps = {
  entities: {},
}

MenuItem.propTypes = {
  entities: PropTypes.object,
  className: PropTypes.string,
}

export default MenuItem
