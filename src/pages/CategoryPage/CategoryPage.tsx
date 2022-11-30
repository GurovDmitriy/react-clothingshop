import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { addToCartAction } from "../../store/cart/cartAction"
import { useAppDispatch } from "../../store/hooks"

function CategoryPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { collectionList } = useLoaderData()
  const dispatch = useAppDispatch()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async function handlerAddToCart(cartItem) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await dispatch(addToCartAction(cartItem))
  }

  return (
    <div className="category-page">
      <CollectionPreview
        entities={collectionList}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        handlerAddToCart={handlerAddToCart}
        className="category-page__collection-preview"
      />
    </div>
  )
}

export default CategoryPage
