import { Outlet } from "react-router-dom"
import ContainerHeaderNav from "../../containers/ContainerHeaderNav/ContainerHeaderNav"
import { useEffect, useState } from "react"
import { auth } from "../../firebase/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth"
import api from "../../api/index"
import menuData from "./data"
import "./styles.scss"

export async function loader() {
  const menuList = await new Promise((resolve) => resolve(menuData))
  return { menuList }
}

function PageHome() {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    email: "",
    displayName: "",
    createdAt: null,
  })

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userSnap = await api.auth.createUserDocument(user)
        setCurrentUser({
          id: userSnap.id,
          ...userSnap.data(),
        })
      }
    })

    return function cleanup() {
      unsubscribeAuth()
    }
  }, [currentUser.id])

  console.log(currentUser)

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
