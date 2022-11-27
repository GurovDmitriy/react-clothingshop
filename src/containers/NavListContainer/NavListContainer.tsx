import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import NavList from "../../components/NavList/NavList"
import { signOutAction } from "../../store/auth/authAction"
import { selectAuth } from "../../store/auth/authSelector"
import { clearCartAction } from "../../store/cart/cartAction"
import { selectCart, selectCartCountItems } from "../../store/cart/cartSelector"
import { clearUserAction } from "../../store/user/userAction"

function NavListContainer(props: NavListContainerPropsType) {
  const { className } = props

  const dispatch = useDispatch()
  const authData = useSelector(selectAuth)
  const cartData = useSelector(selectCart)
  const cartCountItems = useSelector(selectCartCountItems)
  const navigate = useNavigate()

  const navListContainerClass = classNames("nav-list-container", className)

  const cartListEntities = cartData ? Object.values(cartData) : []
  const activeButton = renderActiveButton()

  async function handleSignOut() {
    dispatch(signOutAction())
    dispatch(clearUserAction())
    dispatch(clearCartAction())
  }

  function handlerToCart() {
    navigate("/cart")
  }

  function renderActiveButton() {
    let component = null

    if (authData && authData.id) {
      component = getButtonSignOut()
    } else {
      component = getButtonSignIn()
    }

    return component
  }

  function getButtonSignOut() {
    return (
      <ButtonSimple tag="button" type="button" handleClick={handleSignOut}>
        Sign out
      </ButtonSimple>
    )
  }

  function getButtonSignIn() {
    return (
      <Link to="/sign">
        <ButtonSimple tag="span">Sign in</ButtonSimple>
      </Link>
    )
  }

  return (
    <NavList
      className={navListContainerClass}
      handlerToCart={handlerToCart}
      activeButton={activeButton}
      cartCountItems={cartCountItems}
      cartListEntities={cartListEntities}
    />
  )
}

type NavListContainerPropsType = {
  className?: string
}

export default NavListContainer
