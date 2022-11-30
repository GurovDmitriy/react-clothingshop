import classNames from "classnames"
import { Link } from "react-router-dom"
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"
import ButtonIcon from "../ButtonIcon/ButtonIcon"
import ButtonSimple from "../ButtonSimple/ButtonSimple"
import CartModal from "../CartModal/CartModal"
import "./style.scss"

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
        <ButtonSimple as="span">Shop</ButtonSimple>
      </Link>
      <Link to="/about/contact">
        <ButtonSimple as="span">Contact</ButtonSimple>
      </Link>
      <Link to="/about">
        <ButtonSimple as="span">About</ButtonSimple>
      </Link>
      {activeButton}
      <div className="nav-list__button-icon-box">
        <Link to="/cart">
          {/*<ButtonIcon*/}
          {/*  as="span"*/}
          {/*  isHiddenLabel={false}*/}
          {/*  icon={CartIcon}*/}
          {/*  title="title"*/}
          {/*>*/}
          {/*  {cartCountItems}*/}
          {/*</ButtonIcon>*/}
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

NavList.defaultProps = {
  cartCountItems: 0,
}

type NavListProps = {
  className: string
  handlerToCart: () => void
  activeButton: JSX.Element
  cartCountItems: number | string
  cartListEntities: Array<CartEntitiesType>
}

export default NavList
