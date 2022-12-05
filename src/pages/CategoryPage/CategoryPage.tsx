import { useLoaderData } from "react-router-dom"
import { CollectionPreviewItemEntities } from "../../api/shop/data"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { addToCartAction } from "../../store/cart/cartAction"
import { useAppDispatch } from "../../store/store"

function CategoryPage() {
  const { collectionList }: any = useLoaderData()
  const dispatch = useAppDispatch()

  async function handlerAddToCart(cartItem: CollectionPreviewItemEntities) {
    await dispatch(addToCartAction(cartItem))
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

export default CategoryPage
