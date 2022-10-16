import PropTypes from "prop-types"
import ButtonIcon from "../ButtonIcon/ButtonIcon"

function NavList({ dataItem }) {
  const navListItems = getNavListItems(dataItem)

  return <div className="nav-list">{navListItems}</div>
}

function getNavListItems(dataItem) {
  return dataItem.map((el) => <ButtonIcon key={el.id} dataItem={el} />)
}

NavList.defaultProps = {
  dataItem: [],
}

NavList.propTypes = {
  dataItem: PropTypes.array,
}

export default NavList
