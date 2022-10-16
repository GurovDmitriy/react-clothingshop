import PropTypes from "prop-types"
import ButtonIcon from "../ButtonIcon/ButtonIcon"

function NavList({ dataItem }) {
  const listItems = getListsItems(dataItem)

  return <div className="nav-list">{listItems}</div>
}

function getListsItems(dataItem) {
  const handleClick = (data) => {
    console.log(data)
  }

  return dataItem.map((el) => (
    <ButtonIcon
      key={el.id}
      dataItem={el}
      handleClick={el.tag.name === "button" ? handleClick : null}
    />
  ))
}

NavList.defaultProps = {
  dataItem: [],
}

NavList.propTypes = {
  dataItem: PropTypes.array,
}

export default NavList
