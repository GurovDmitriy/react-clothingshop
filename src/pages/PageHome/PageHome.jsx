import { Outlet } from "react-router-dom"
import ContainerHeaderNav from "../../containers/ContainerHeaderNav/ContainerHeaderNav"
import { useEffect, useState } from "react"
import { auth } from "../../firebase/firebaseConfig"
import menuData from "./data"
import "./styles.scss"

export async function loader() {
  const menuList = await new Promise((resolve) => resolve(menuData))
  return { menuList }
}

function PageHome() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })

    console.log(currentUser)

    return function cleanup() {
      unsubscribeAuth()
    }
  })

  return (
    <div className="page-home">
      <ContainerHeaderNav className="page-home__header-nav" />
      <div className="page-home__content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default PageHome
