import AppMenuItem from "../AppMenuItem/AppMenuItem"
import PropTypes from "prop-types"

function AppMenu(props) {
  const appMenuItems = getAppMenuItems(props.dataItem)

  return <section className="menu">{appMenuItems}</section>
}

function getAppMenuItems(items) {
  return items.map((item) => {
    return <AppMenuItem dataItem={item} key={item.id} />
  })
}

AppMenu.defaultProps = {
  dataItem: {},
}

AppMenu.propTypes = {
  dataItem: PropTypes.object,
}

export default AppMenu
