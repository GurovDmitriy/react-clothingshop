import { useLoaderData } from "react-router-dom"
import MenuList from "../../components/MenuList/MenuList"
import HeaderNav from "../../containers/HeaderNav/HeaderNav"
import menuData from "./data"
import "./styles.scss"

export async function loader() {
  const menuList = await new Promise((resolve) => resolve(menuData))
  return { menuList }
}

function PageHome() {
  const { menuList } = useLoaderData()

  return (
    <div className="page-home">
      <HeaderNav />
      <MenuList dataItem={menuList} />
    </div>
  )
}

export default PageHome
