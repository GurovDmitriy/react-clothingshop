import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./style.scss"

function MenuItem({ dataItem, className, ...propsMenu }) {
  const classesMenu = classNames("menu-item", className)

  return (
    <div className={classesMenu} {...propsMenu}>
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
  className: PropTypes.string,
}

export default MenuItem
