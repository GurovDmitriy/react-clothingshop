import { useDispatch } from "react-redux"
import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { updateCartAction } from "../../store/cart/cartAction"
import cartOperationTypes from "../../store/types/cartOperationTypes"
import shopCollections from "./data"

export async function loader() {
  const shopList = await new Promise((resolve) => {
    const data = shopCollections.map((item) => {
      return {
        ...item,
        items: item.items.filter((el, index) => index <= 3),
      }
    })
    resolve(data)
  })
  return { shopList }
}

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
        dataItem={shopList}
        handleAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default ShopPage
