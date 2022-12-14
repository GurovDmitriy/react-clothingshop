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

function NavListContainer(props: NavListContainerProps) {
  const { className } = props

  const theme = useContext(ThemeContext)
  const store = useContext(StoreContext)

  const authData = store.auth.entities
  const cartData = store.cart.entities
  const cartCountItems = store.cart.cartCountItems
  const navigate = useNavigate()

  const navListContainerClass = classNames("nav-list-container", className)

  const cartListEntities: CartEntities[] = cartData
    ? Object.values(cartData)
    : []
  const activeButton = renderActiveButton()

  async function handlerSignOut() {
    await store.auth.signOut()
    store.user.clearUser()
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
}

type NavListContainerProps = {
  className?: string
}

export default observer(NavListContainer)
