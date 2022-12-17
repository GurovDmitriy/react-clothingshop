import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import api from "../../api/api"
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock"
import HeaderNavContainer from "../../containers/HeaderNavContainer/HeaderNavContainer"
import { StoreContext } from "../../providers/StoreContext/StoreContext"
import { ThemeContext } from "../../providers/ThemeContext/ThemeContext"
import { ActionStatus } from "../../store/storeType"
import "./style.scss"

function HomeLayout() {
  const theme = useContext(ThemeContext)
  const store = useContext(StoreContext)

  const authStateFetch = store.auth.status
  const cartStateFetch = store.cart.status

  const authLoading = authStateFetch === ActionStatus.pending
  const cartLoading = cartStateFetch === ActionStatus.pending

  useEffect(() => {
    const unsubscribeAuth = api.auth.subscribeStateChange(async (user) => {
      if (user) {
        await store.auth.signCheck()
        await store.user.fetchUser()
        await store.cart.fetchCart()
      }
    })

    return function cleanup() {
      unsubscribeAuth()
    }
  }, [])

  const aboutLayoutClass = classNames("home-layout", theme.themeValue)

  return (
    <div
      className={aboutLayoutClass}
      style={{
        background: theme[theme.themeValue].background,
        color: theme[theme.themeValue].color,
      }}
    >
      <LoadingBlock
        className="home-layout__loading-block"
        loading={authLoading || cartLoading}
      />
      <HeaderNavContainer className="home-layout__header-nav" />
      <div className="home-layout__content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default observer(HomeLayout)
