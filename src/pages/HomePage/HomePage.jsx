import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import api from "../../api"
import HeaderNavContainer from "../../containers/HeaderNavContainer/HeaderNavContainer"
import { fetchUserAction } from "../../store/user/userAction"
import "./styles.scss"

function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribeAuth = api.auth.subscribeStateChange((user) => {
      if (user) {
        dispatch(fetchUserAction(user.uid))
      }
    })

    return function cleanup() {
      unsubscribeAuth()
    }
  }, [])

  return (
    <div className="page-home">
      <HeaderNavContainer className="page-home__header-nav" />
      <div className="page-home__content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default HomePage
