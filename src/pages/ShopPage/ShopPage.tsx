import { useSelector } from "react-redux"
import { useLoaderData, useNavigate } from "react-router-dom"
import { CollectionPreviewItemEntities } from "../../api/shop/data"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { selectAuth } from "../../store/auth/authSelector"
import { addToCartAction } from "../../store/cart/cartAction"
import { useAppDispatch } from "../../store/store"

function ShopPage() {
  const { shopList }: any = useLoaderData()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const auth = useSelector(selectAuth)

  async function handlerAddToCart(cartItem: CollectionPreviewItemEntities) {
    if (!auth || !auth.id) {
      navigate("/sign")
    } else {
      await dispatch(addToCartAction(cartItem))
    }
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
