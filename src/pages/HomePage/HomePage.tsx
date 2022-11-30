import { useLoaderData } from "react-router-dom"
import MenuList from "../../components/MenuList/MenuList"

function HomePage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { menuList } = useLoaderData()

  return (
    <div className="page-home">
      <MenuList entities={menuList} />
    </div>
  )
}

export default HomePage
