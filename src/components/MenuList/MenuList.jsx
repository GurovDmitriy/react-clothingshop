import classNames from "classnames"
import PropTypes from "prop-types"
import MenuItem from "../MenuItem/MenuItem"
import "./style.scss"

function MenuList({ className, entities }) {
  const listClass = classNames("menu-list", className)

  const appMenuItems = entities.map((item) => {
    return (
      <MenuItem
        className="menu-list__item"
        entities={item}
        key={item.id}
        style={{ backgroundImage: `url(${item.image})` }}
      />
    )
  })

  return <section className={listClass}>{appMenuItems}</section>
}

MenuList.defaultProps = {
  entities: [],
}

MenuList.propTypes = {
  entities: PropTypes.array,
  className: PropTypes.string,
}

export default MenuList
