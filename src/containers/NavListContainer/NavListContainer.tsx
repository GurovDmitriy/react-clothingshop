import classNames from "classnames"
import { Link, useNavigate } from "react-router-dom"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import NavList from "../../components/NavList/NavList"
import { signOutAction } from "../../store/auth/authAction"
import { selectAuth } from "../../store/auth/authSelector"
import { clearCartAction } from "../../store/cart/cartAction"
import { selectCart, selectCartCountItems } from "../../store/cart/cartSelector"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { clearUserAction } from "../../store/user/userAction"

function NavListContainer(props: NavListContainerPropsType) {
  const { className } = props

  const dispatch = useAppDispatch()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const authData = useAppSelector(selectAuth)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cartData = useAppSelector(selectCart)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cartCountItems = useAppSelector(selectCartCountItems)
  const navigate = useNavigate()

  const navListContainerClass = classNames("nav-list-container", className)

  const cartListEntities = cartData ? Object.values(cartData) : []
  const activeButton = renderActiveButton()

  async function handlerSignOut() {
    dispatch(signOutAction())
    dispatch(clearUserAction())
    dispatch(clearCartAction())
  }

  function handlerToCart() {
    navigate("/cart")
  }

  function renderActiveButton() {
    let component = null

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (authData && authData.id) {
      component = getButtonSignOut()
    } else {
      component = getButtonSignIn()
    }

    return component
  }

  function getButtonSignOut() {
    return (
      <ButtonSimple as="button" type="button" handlerClick={handlerSignOut}>
        Sign out
      </ButtonSimple>
    )
  }

  function getButtonSignIn() {
    return (
      <Link to="/sign">
        <ButtonSimple as="span">Sign in</ButtonSimple>
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
