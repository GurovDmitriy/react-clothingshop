import { useLoaderData } from "react-router-dom"
import MenuList from "../../components/MenuList/MenuList"

function HomePage() {
  const { menuList }: any = useLoaderData()

  return (
    <div className="page-home">
      <MenuList entities={menuList} />
    </div>
  )
}

export default HomePage
