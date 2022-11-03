import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import shopCollections from "./data"

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

function ShopPage() {
  const { shopList } = useLoaderData()

  return (
    <div className="page-shop">
      <CollectionPreview
        className="page-shop__collectionPreview"
        dataItem={shopList}
      />
    </div>
  )
}

export default ShopPage
