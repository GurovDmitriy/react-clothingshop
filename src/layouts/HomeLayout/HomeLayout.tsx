import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import api from "../../api/api"
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock"
import HeaderNavContainer from "../../containers/HeaderNavContainer/HeaderNavContainer"
import { actionStatusTypes } from "../../helpers/constants"
import { signCheckAction } from "../../store/auth/authAction"
import { selectAuthStatusFetch } from "../../store/auth/authSelector"
import { fetchCartAction } from "../../store/cart/cartAction"
import { selectCartStatusFetch } from "../../store/cart/cartSelector"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchUserAction } from "../../store/user/userAction"
import "./style.scss"

function HomeLayout() {
  const dispatch = useAppDispatch()
  const authStateFetch = useAppSelector(selectAuthStatusFetch)
  const cartStateFetch = useAppSelector(selectCartStatusFetch)

  const authLoading = authStateFetch === actionStatusTypes.pending
  const cartLoading = cartStateFetch === actionStatusTypes.pending

  useEffect(() => {
    const unsubscribeAuth = api.auth.subscribeStateChange(async (user) => {
      if (user) {
        await dispatch(signCheckAction())
        await dispatch(fetchUserAction())
        await dispatch(fetchCartAction())
      }
    })

    return function cleanup() {
      unsubscribeAuth()
    }
  }, [])

  return (
    <div className="home-layout">
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

export default HomeLayout
