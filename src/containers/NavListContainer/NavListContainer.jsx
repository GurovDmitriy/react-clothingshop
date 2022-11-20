import classNames from "classnames"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import NavList from "../../components/NavList/NavList"
import { signOutAction } from "../../store/auth/authAction"
import { selectAuth } from "../../store/auth/authSelector"
import { updateCartAction } from "../../store/cart/cartAction"
import { selectCart, selectCartCountItems } from "../../store/cart/cartSelector"
import cartOperationTypes from "../../store/types/cartOperationTypes"
import { clearUserAction } from "../../store/user/userAction"

function NavListContainer({ className }) {
  const dispatch = useDispatch()
  const authData = useSelector(selectAuth)
  const cartData = useSelector(selectCart)
  const cartCountItems = useSelector(selectCartCountItems)
  const navigate = useNavigate()

  const cartListEntities = cartData ? Object.values(cartData) : []

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
    <NavList
      className={navListContainerClass}
      handleToCart={handleToCart}
      renderActiveButton={renderActiveButton}
      cartCountItems={cartCountItems}
      cartListEntities={cartListEntities}
    />
  )
}

NavListContainer.propTypes = {
  className: PropTypes.string,
}

export default NavListContainer
