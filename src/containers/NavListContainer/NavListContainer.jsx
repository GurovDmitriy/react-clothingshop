import classNames from "classnames"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import CartModal from "../../components/CartModal/CartModal"
import { signOutAction } from "../../store/auth/authAction"
import { selectAuth } from "../../store/auth/authSelector"
import { updateCartAction } from "../../store/cart/cartAction"
import { selectCart, selectCartCountItems } from "../../store/cart/cartSelector"
import cartOperationTypes from "../../store/types/cartOperationTypes"
import { clearUserAction } from "../../store/user/userAction"
import "./style.scss"

function NavListContainer({ className }) {
  const dispatch = useDispatch()
  const authData = useSelector(selectAuth)
  const cartData = useSelector(selectCart)
  const cartCountItems = useSelector(selectCartCountItems)
  const navigate = useNavigate()

  const cartList = cartData ? Object.values(cartData) : []

  const handleSignOut = async () => {
    dispatch(signOutAction())
    dispatch(clearUserAction())
    dispatch(updateCartAction({ cartOperation: cartOperationTypes.clear }))
  }

  const handleToCart = () => {
    navigate("/cart")
  }

  const renderActiveButton = () => {
    let component = null

    if (authData && authData.id) {
      component = (
        <ButtonSimple type="button" handleClick={handleSignOut}>
          Sign out
        </ButtonSimple>
      )
    } else {
      component = (
        <ButtonSimple to="/sign" tag={Link}>
          Sign in
        </ButtonSimple>
      )
    }

    return component
  }

  const navListContainerClass = classNames("nav-list-container", className)

  return (
    <div className={navListContainerClass}>
      <ButtonSimple to="/shop" tag={Link}>
        Shop
      </ButtonSimple>
      <ButtonSimple to="/contact" tag={Link}>
        Contact
      </ButtonSimple>
      <ButtonSimple to="/about" tag={Link}>
        About
      </ButtonSimple>
      {renderActiveButton()}
      <div className="nav-list-container__button-icon-box">
        <ButtonIcon
          to="/cart"
          tag={Link}
          className="nav-list-container__button-icon"
          icon={CartIcon}
        >
          {cartCountItems || null}
        </ButtonIcon>
        <CartModal
          className="nav-list-container__cart-modal"
          entities={cartList}
          handleToCart={handleToCart}
        />
      </div>
    </div>
  )
}

NavListContainer.propTypes = {
  className: PropTypes.string,
}

export default NavListContainer
