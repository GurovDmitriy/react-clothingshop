import classNames from "classnames"
import PropTypes from "prop-types"
import MenuItem from "../MenuItem/MenuItem"
import "./styles.scss"

function MenuList({ className, dataItem }) {
  const classesList = classNames("menu-list", className)
  const appMenuItems = dataItem.map((item) => {
    return (
      <MenuItem
        className="menu-list__item"
        dataItem={item}
        key={item.id}
        style={{ backgroundImage: `url(${item.image})` }}
      />
    )
  })

  return <section className={classesList}>{appMenuItems}</section>
}

MenuList.defaultProps = {
  dataItem: [],
}

MenuList.propTypes = {
  dataItem: PropTypes.array,
  className: PropTypes.string,
}

export default MenuList
