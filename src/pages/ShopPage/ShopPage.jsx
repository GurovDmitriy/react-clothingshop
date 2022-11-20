import { useDispatch } from "react-redux"
import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { updateCartAction } from "../../store/cart/cartAction"
import cartOperationTypes from "../../store/types/cartOperationTypes"

function ShopPage() {
  const { shopList } = useLoaderData()
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
    <div className="page-shop">
      <CollectionPreview
        className="page-shop__collectionPreview"
        entities={shopList}
        handleAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default ShopPage
