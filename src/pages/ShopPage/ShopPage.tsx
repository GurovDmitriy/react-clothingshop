import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { addToCartAction } from "../../store/cart/cartAction"
import { useAppDispatch } from "../../store/hooks"

function ShopPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { shopList } = useLoaderData()
  const dispatch = useAppDispatch()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async function handlerAddToCart(cartItem) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
