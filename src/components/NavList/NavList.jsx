import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"
import ButtonIcon from "../ButtonIcon/ButtonIcon"
import ButtonSimple from "../ButtonSimple/ButtonSimple"
import CartModal from "../CartModal/CartModal"
import "./style.scss"

function NavList(props) {
  const {
    className,
    handleToCart,
    renderActiveButton,
    cartCountItems,
    cartListEntities,
  } = props

  const navListContainerClass = classNames("nav-list", className)

  return (
    <div className={navListContainerClass}>
      <ButtonSimple to="/shop" tag={Link}>
        Shop
      </ButtonSimple>
      <ButtonSimple to="/about/contact" tag={Link}>
        Contact
      </ButtonSimple>
      <ButtonSimple to="/about" tag={Link}>
        About
      </ButtonSimple>
      {renderActiveButton()}
      <div className="nav-list__button-icon-box">
        <ButtonIcon
          to="/cart"
          tag={Link}
          className="nav-list__button-icon"
          icon={CartIcon}
        >
          {cartCountItems}
        </ButtonIcon>
        <CartModal
          className="nav-list__cart-modal"
          entities={cartListEntities}
          handleToCart={handleToCart}
        />
      </div>
    </div>
  )
}

NavList.defaultProps = {
  cartCountItems: 0,
  cartListEntities: [],
}

NavList.propTypes = {
  className: PropTypes.string,
  handleToCart: PropTypes.func,
  renderActiveButton: PropTypes.func,
  cartCountItems: PropTypes.number,
  cartListEntities: PropTypes.array,
}

export default NavList
