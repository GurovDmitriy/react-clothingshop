import { useSelector } from "react-redux"
import { useLoaderData, useNavigate } from "react-router-dom"
import { CollectionPreviewItemEntities } from "../../api/shop/data"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { selectAuth } from "../../store/auth/authSelector"
import { addToCartAction } from "../../store/cart/cartAction"
import { useAppDispatch } from "../../store/store"

function CategoryPage() {
  const { collectionList }: any = useLoaderData()
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
