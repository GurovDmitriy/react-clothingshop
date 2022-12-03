import { useLoaderData } from "react-router-dom"
import { CollectionPreviewItemEntities } from "../../api/shop/data"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { addToCartAction } from "../../store/cart/cartAction"
import { useAppDispatch } from "../../store/hooks"

function ShopPage() {
  const { shopList }: any = useLoaderData()
  const dispatch = useAppDispatch()

  async function handlerAddToCart(cartItem: CollectionPreviewItemEntities) {
    await dispatch(addToCartAction(cartItem))
  }

  return (
    <div className="page-shop">
      <CollectionPreview
        className="page-shop__collectionPreview"
        entities={shopList}
        handlerAddToCart={handlerAddToCart}
      />
    </div>
  )
}

export default ShopPage
