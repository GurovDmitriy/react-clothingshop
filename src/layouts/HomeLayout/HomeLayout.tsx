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

const HomeLayout = observer(function HomeLayout() {
  const theme = useContext(ThemeContext)
  const store = useContext(StoreContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const authStateFetch = store.auth.status
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cartStateFetch = store.cart.status

  const authLoading = authStateFetch === ActionStatus.pending
  const cartLoading = cartStateFetch === ActionStatus.pending

  useEffect(() => {
    const unsubscribeAuth = api.auth.subscribeStateChange(async (user) => {
      if (user) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await store.auth.signCheck()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await store.user.fetchUser()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        background: theme[theme.themeValue].background,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
})

export default HomeLayout
