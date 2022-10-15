import MenuItem from "../MenuItem/MenuItem"
import PropTypes from "prop-types"
import "./styles.scss"

function Menu(props) {
  const appMenuItems = getAppMenuItems(props.dataItem)

  return <section className="menu">{appMenuItems}</section>
}

function getAppMenuItems(items) {
  return items.map((item) => {
    return <MenuItem dataItem={item} key={item.id} />
  })
}

Menu.defaultProps = {
  dataItem: [],
}

Menu.propTypes = {
  dataItem: PropTypes.array,
}

export default Menu
