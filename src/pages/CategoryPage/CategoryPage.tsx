import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { CollectionPreviewItemEntities } from "../../api/shop/data"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { StoreContext } from "../../providers/StoreContext/StoreContext"

function CategoryPage() {
  const { collectionList }: any = useLoaderData()
  const store = useContext(StoreContext)
  const navigate = useNavigate()

  const auth = store.auth.entities

  async function handlerAddToCart(cartItem: CollectionPreviewItemEntities) {
    if (!auth || !auth.id) {
      navigate("/sign")
    } else {
      await store.cart.addToCart(cartItem)
    }
  }

  return (
    <div className="category-page">
      <CollectionPreview
        entities={collectionList}
        handlerAddToCart={handlerAddToCart}
        className="category-page__collection-preview"
      />
    </div>
  )
}

export default observer(CategoryPage)
