import { useLoaderData } from "react-router-dom"
import MenuList from "../../components/MenuList/MenuList"

function HomePage() {
  const { menuList } = useLoaderData()

  return (
    <div className="page-home">
      <MenuList dataItem={menuList} />
    </div>
  )
}

export default HomePage
