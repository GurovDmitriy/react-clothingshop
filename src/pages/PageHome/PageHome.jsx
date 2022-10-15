import { useLoaderData } from "react-router-dom"
import Menu from "../../components/Menu/Menu"
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
      <Menu dataItem={menuList} />
    </div>
  )
}

export default PageHome
