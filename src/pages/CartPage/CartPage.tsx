import classNames from "classnames"
import { useEffect } from "react"
import CartBox from "../../components/CartBox/CartBox"
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock"
import { CartEntities, CartOperation } from "../../firebaseSDK/cart/cart"
import {
  addToCartAction,
  deleteFromCartAction,
  fetchCartAction,
  removeFromCartAction,
} from "../../store/cart/cartAction"
import {
  selectCart,
  selectCartStatusFetch,
  selectCartTotalPrice,
} from "../../store/cart/cartSelector"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { ActionStatus } from "../../store/storeType"
import "./style.scss"

function CartPage(props: CartPageProps) {
  const { className } = props

  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCart)
  const totalPrice = useAppSelector(selectCartTotalPrice)
  const cartStateFetch = useAppSelector(selectCartStatusFetch)

  const cartEntities = cart ? Object.values(cart) : []
  const loading = cartStateFetch === ActionStatus.pending

  useEffect(() => {
    dispatch(fetchCartAction())
  }, [])

  async function handlerChangeCount(
    cartItem: CartEntities,
    cartOperation: CartOperation
  ) {
    switch (cartOperation) {
      case CartOperation.increment:
        dispatch(addToCartAction(cartItem))
        break

      case CartOperation.decrement:
        dispatch(removeFromCartAction(cartItem))
        break

      case CartOperation.delete:
        dispatch(deleteFromCartAction(cartItem))
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
}

type CartPageProps = {
  className?: string
}

export default CartPage
