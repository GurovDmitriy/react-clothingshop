import { Outlet } from "react-router-dom"
import HeaderNav from "../../containers/HeaderNav/HeaderNav"
import menuData from "./data"
import "./styles.scss"

export async function loader() {
  const menuList = await new Promise((resolve) => resolve(menuData))
  return { menuList }
}

function PageHome() {
  return (
    <div className="page-home">
      <HeaderNav />
      <Outlet />
    </div>
  )
}

export default PageHome
