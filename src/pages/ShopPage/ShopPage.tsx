import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { CollectionPreviewItemEntities } from "../../api/shop/data"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { StoreContext } from "../../providers/StoreContext/StoreContext"

const ShopPage = observer(function ShopPage() {
  const { shopList }: any = useLoaderData()
  const store = useContext(StoreContext)
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const auth = store.auth.entities

  async function handlerAddToCart(cartItem: CollectionPreviewItemEntities) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!auth || !auth.id) {
      navigate("/sign")
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await store.cart.addToCart(cartItem)
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
})

export default ShopPage
