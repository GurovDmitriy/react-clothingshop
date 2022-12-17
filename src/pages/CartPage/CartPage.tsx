import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import CartBox from "../../components/CartBox/CartBox"
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock"
import { CartEntities, CartOperation } from "../../firebaseSDK/cart/cart"
import { StoreContext } from "../../providers/StoreContext/StoreContext"
import { ActionStatus } from "../../store/storeType"
import "./style.scss"

const CartPage = observer(function CartPage(props: CartPageProps) {
  const { className } = props

  const store = useContext(StoreContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cart = store.cart.entities
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const totalPrice = store.cart.cartTotalPrice
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cartStateFetch = store.cart.status

  const cartEntities: CartEntities[] = cart ? Object.values(cart) : []
  const loading = cartStateFetch === ActionStatus.pending

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.cart.fetchCart()
  }, [])

  async function handlerChangeCount(
    cartItem: CartEntities,
    cartOperation: CartOperation
  ) {
    switch (cartOperation) {
      case CartOperation.increment:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store.cart.addToCart(cartItem)
        break

      case CartOperation.decrement:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store.cart.removeFromCart(cartItem)
        break

      case CartOperation.delete:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store.cart.deleteFromCart(cartItem)
        break

      default:
        return
    }
  }

  const cartPageClass = classNames("cart-page", className)

  return (
    <div className={cartPageClass}>
      <LoadingBlock className="cart-page__loading-block" loading={loading} />
      <CartBox
        className="cart-page__cart-box"
        handlerChangeCount={handlerChangeCount}
        entities={cartEntities}
        totalPrice={totalPrice}
      />
    </div>
  )
})

type CartPageProps = {
  className?: string
}

export default CartPage
