import { useDispatch } from "react-redux"
import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { addToCartAction } from "../../store/cart/cartAction"

function CategoryPage() {
  const { collectionList } = useLoaderData()
  const dispatch = useDispatch()

  async function handleAddToCart(cartItem) {
    await dispatch(addToCartAction(cartItem))
  }

  return (
    <div className="category-page">
      <CollectionPreview
        entities={collectionList}
        handleAddToCart={handleAddToCart}
        className="category-page__collection-preview"
      />
    </div>
  )
}

export default CategoryPage
