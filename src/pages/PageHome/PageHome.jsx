import { useLoaderData } from "react-router-dom"
import AppMenu from "../../containers/AppMenu/AppMenu"
import { menu } from "./data"

export async function loader() {
  const menuList = await new Promise((resolve) => resolve(menu))
  return { menuList }
}

function PageHome() {
  const { menuList } = useLoaderData()

  return (
    <div className="page-home">
      <AppMenu dataItem={menuList} />
    </div>
  )
}

export default PageHome
