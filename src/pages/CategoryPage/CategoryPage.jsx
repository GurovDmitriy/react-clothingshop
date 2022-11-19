import { useDispatch } from "react-redux"
import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { updateCartAction } from "../../store/cart/cartAction"
import cartOperationTypes from "../../store/types/cartOperationTypes"

function CategoryPage() {
  const { collectionList } = useLoaderData()
  const dispatch = useDispatch()

  const handleAddToCart = async (cartItem) => {
    await dispatch(
      updateCartAction({
        cartItem,
        cartOperation: cartOperationTypes.increment,
      })
    )
  }

  return (
    <div className="category-page">
      <CollectionPreview
        dataItem={collectionList}
        handleAddToCart={handleAddToCart}
        className="category-page__collection-preview"
      />
    </div>
  )
}

export default CategoryPage
