import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import CartModal from "../../components/CartModal/CartModal"
import { signOutAction } from "../../store/auth/authAction"
import { selectAuth } from "../../store/auth/authSelector"
import { clearCartAction } from "../../store/cart/cartAction"
import { selectCart, selectCartCountItems } from "../../store/cart/cartSelector"
import { clearUserAction } from "../../store/user/userAction"
import "./style.scss"

function NavListContainer() {
  const dispatch = useDispatch()
  const authData = useSelector(selectAuth)
  const cartData = useSelector(selectCart)
  const cartCountItems = useSelector(selectCartCountItems)

  const cartList = cartData ? Object.values(cartData) : []

  const handleSignOut = async () => {
    dispatch(signOutAction())
    dispatch(clearUserAction())
    dispatch(clearCartAction())
  }

  const handleClickCart = () => {
    console.log("cart")
  }

  const buttonSignOut = (
    <ButtonSimple type="button" handleClick={handleSignOut}>
      Sign out
    </ButtonSimple>
  )

  const buttonSignIn = (
    <ButtonSimple to="/sign" tag={Link}>
      Sign in
    </ButtonSimple>
  )

  const activeButton = authData && authData.id ? buttonSignOut : buttonSignIn

  return (
    <div className="nav-list">
      <ButtonSimple to="/shop" tag={Link}>
        Shop
      </ButtonSimple>
      <ButtonSimple to="/contact" tag={Link}>
        Contact
      </ButtonSimple>
      <ButtonSimple to="/about" tag={Link}>
        About
      </ButtonSimple>
      {activeButton}
      <div className="nav-list__button-icon-box">
        <ButtonIcon
          to="/"
          tag={Link}
          className="nav-list__button-icon"
          icon={CartIcon}
          handleClick={() => handleClickCart()}
        >
          {cartCountItems || null}
        </ButtonIcon>
        <CartModal className="nav-list__cart-modal" list={cartList} />
      </div>
    </div>
  )
}

export default NavListContainer
