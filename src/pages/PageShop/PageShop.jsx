import { useLoaderData } from "react-router-dom"
import shopCollections from "./data"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import "./styles.scss"

export async function loader() {
  const shopList = await new Promise((resolve) => {
    const data = shopCollections.map((item) => {
      return {
        ...item,
        items: item.items.filter((el, index) => index <= 3),
      }
    })
    resolve(data)
  })
  return { shopList }
}

function PageShop() {
  const { shopList } = useLoaderData()

  return (
    <div className="page-shop">
      <CollectionPreview dataItem={shopList} />
    </div>
  )
}

export default PageShop
