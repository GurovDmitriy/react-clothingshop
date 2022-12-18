import classNames from "classnames"
import { BsCart3, BsLightbulb } from "react-icons/bs"
import { Link } from "react-router-dom"
// import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"
import { CartEntities } from "../../firebaseSDK/cart/cart"
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
    handlerThemeToggle,
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
      <ButtonIcon
        as="button"
        type="button"
        onClick={handlerThemeToggle}
        isHiddenLabel={true}
        icon={<BsLightbulb />}
        title="title"
      />
      <div className="nav-list__button-icon-box">
        <Link to="/cart">
          <ButtonIcon
            as="span"
            isHiddenLabel={false}
            icon={<BsCart3 />}
            title="title"
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

NavList.defaultProps = {
  cartCountItems: 0,
}

type NavListProps = {
  className: string
  handlerToCart: () => void
  handlerThemeToggle: () => void
  activeButton: JSX.Element
  cartCountItems: number | string
  cartListEntities: Array<CartEntities> | null
}

export default NavList
