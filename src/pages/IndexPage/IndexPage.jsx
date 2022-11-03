import { useLoaderData } from "react-router-dom"
import MenuList from "../../components/MenuList/MenuList"
import menuData from "./data"

export async function loader() {
  const menuList = await new Promise((resolve) => resolve(menuData))
  return { menuList }
}

function IndexPage() {
  const { menuList } = useLoaderData()

  return (
    <div className="page-index">
      <MenuList dataItem={menuList} />
    </div>
  )
}

export default IndexPage
