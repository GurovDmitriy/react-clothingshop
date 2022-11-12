import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import api from "../../api"
import HeaderNavContainer from "../../containers/HeaderNavContainer/HeaderNavContainer"
import { signCheckAction } from "../../store/auth/authAction"
import { fetchUserAction } from "../../store/user/userAction"
import "./styles.scss"

function HomeLayout() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribeAuth = api.auth.subscribeStateChange((user) => {
      if (user) {
        dispatch(signCheckAction())
        dispatch(fetchUserAction(user.uid))
      }
    })

    return function cleanup() {
      unsubscribeAuth()
    }
  }, [])

  return (
    <div className="home-layout">
      <HeaderNavContainer className="home-layout__header-nav" />
      <div className="home-layout__content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout
