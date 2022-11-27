import classNames from "classnames"
import { Link } from "react-router-dom"
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"
import ButtonIcon from "../ButtonIcon/ButtonIcon"
import ButtonSimple from "../ButtonSimple/ButtonSimple"
import CartModal from "../CartModal/CartModal"
import "./style.scss"

NavList.defaultProps = {
  cartCountItems: 0,
  cartListEntities: [],
}

type NavListProps =
  | {
      className: string
      handlerToCart: () => void
      activeButton: JSX.Element
      cartCountItems: number | string
      cartListEntities: Array<CartEntitiesType>
    }
  | typeof NavList.defaultProps

function NavList(props: NavListProps) {
  const {
    className,
    handlerToCart,
    activeButton,
    cartCountItems,
    cartListEntities,
  } = props

  const navListContainerClass = classNames("nav-list", className)

  return (
    <div className={navListContainerClass}>
      <Link to="/shop">
        <ButtonSimple tag="span">Shop</ButtonSimple>
      </Link>
      <Link to="/about/contact">
        <ButtonSimple tag="span">Contact</ButtonSimple>
      </Link>
      <Link to="/about">
        <ButtonSimple tag="span">About</ButtonSimple>
      </Link>
      {activeButton}
      <div className="nav-list__button-icon-box">
        <Link to="/cart">
          <ButtonIcon
            tag="span"
            className="nav-list__button-icon"
            isHiddenLabel={false}
            icon={CartIcon}
          >
            {cartCountItems}
          </ButtonIcon>
        </Link>
        <CartModal
          className="nav-list__cart-modal"
          entities={cartListEntities}
          handlerToCart={handlerToCart}
        />
      </div>
    </div>
  )
}

export default NavList
