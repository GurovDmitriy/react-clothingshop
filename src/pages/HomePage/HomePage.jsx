import { useLoaderData } from "react-router-dom"
import MenuList from "../../components/MenuList/MenuList"
import menuData from "./data"

export async function loader() {
  const menuList = await new Promise((resolve) => resolve(menuData))
  return { menuList }
}

function HomePage() {
  const { menuList } = useLoaderData()

  return (
    <div className="page-home">
      <MenuList dataItem={menuList} />
    </div>
  )
}

export default HomePage
