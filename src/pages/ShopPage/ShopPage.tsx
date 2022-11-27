import { useDispatch } from "react-redux"
import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { addToCartAction } from "../../store/cart/cartAction"

function ShopPage() {
  const { shopList } = useLoaderData()
  const dispatch = useDispatch()

  async function handleAddToCart(cartItem) {
    await dispatch(addToCartAction(cartItem))
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
