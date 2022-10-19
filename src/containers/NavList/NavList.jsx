import PropTypes from "prop-types"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon"
import { dataNav, dataCartButton } from "./data"
import "./styles.scss"

function NavList() {
  const listItems = getListsItems(dataNav)

  const handleClickCart = () => {
    console.log("cart")
  }

  return (
    <div className="nav-list">
      {listItems}
      <ButtonIcon
        dataItem={dataCartButton}
        handleClick={() => handleClickCart()}
      />
    </div>
  )
}

function getListsItems(dataItem) {
  return dataItem.map((el) => <ButtonSimple key={el.id} dataItem={el} />)
}

NavList.defaultProps = {
  dataItem: [],
}

NavList.propTypes = {
  dataItem: PropTypes.array,
}

export default NavList
