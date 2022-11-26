import classNames from "classnames"
import PropTypes from "prop-types"
import MenuItem from "../MenuItem/MenuItem"
import "./style.scss"

function MenuList(props) {
  const { className, entities } = props

  function renderAppMenuItems() {
    return entities.map((item) => {
      return (
        <MenuItem
          className="menu-list__item"
          entities={item}
          key={item.id}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      )
    })
  }

  const appMenuItems = renderAppMenuItems()
  const listClass = classNames("menu-list", className)

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
