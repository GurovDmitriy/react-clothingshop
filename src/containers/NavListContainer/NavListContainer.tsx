import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import NavList from "../../components/NavList/NavList"
import { CartEntities } from "../../firebaseSDK/cart/cart"
import { StoreContext } from "../../providers/StoreContext/StoreContext"
import { ThemeContext } from "../../providers/ThemeContext/ThemeContext"
import { ThemeContextValue } from "../../providers/ThemeContext/themeContextType"

const NavListContainer = observer(function NavListContainer(
  props: NavListContainerProps
) {
  const { className } = props

  const theme = useContext(ThemeContext)
  const store = useContext(StoreContext)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const authData = store.auth.entities
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cartData = store.cart.entities
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cartCountItems = store.cart.cartCountItems
  const navigate = useNavigate()

  const navListContainerClass = classNames("nav-list-container", className)

  const cartListEntities: CartEntities[] = cartData
    ? Object.values(cartData)
    : []
  const activeButton = renderActiveButton()

  async function handlerSignOut() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.auth.signOut()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.user.clearUser()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.cart.clearCart()
  }

  function handlerToCart() {
    navigate("/cart")
  }

  function handlerThemeToggle(toggleCB: () => ThemeContextValue) {
    toggleCB()
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
      handlerThemeToggle={() => handlerThemeToggle(theme.toggle)}
      handlerToCart={handlerToCart}
      activeButton={activeButton}
      cartCountItems={cartCountItems}
      cartListEntities={cartListEntities}
    />
  )
})

type NavListContainerProps = {
  className?: string
}

export default NavListContainer
