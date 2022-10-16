import MenuItem from "../MenuItem/MenuItem"
import PropTypes from "prop-types"
import "./styles.scss"

function MenuList(props) {
  const appMenuItems = getMenuItems(props.dataItem)

  return <section className="menu-list">{appMenuItems}</section>
}

function getMenuItems(items) {
  return items.map((item) => {
    return <MenuItem dataItem={item} key={item.id} />
  })
}

MenuList.defaultProps = {
  dataItem: [],
}

MenuList.propTypes = {
  dataItem: PropTypes.array,
}

export default MenuList
