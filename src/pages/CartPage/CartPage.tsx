import classNames from "classnames"
import { useEffect } from "react"
import CartBox from "../../components/CartBox/CartBox"
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock"
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
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import "./style.scss"

function CartPage(props: CartPageProps) {
  const { className } = props

  const dispatch = useAppDispatch()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cart = useAppSelector(selectCart)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const totalPrice = useAppSelector(selectCartTotalPrice)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cartStateFetch = useAppSelector(selectCartStatusFetch)

  const cartEntities = cart ? Object.values(cart) : []
  const loading = cartStateFetch === ActionStatus.pending

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchCartAction())
  }, [])

  async function handlerChangeCount(
    cartItem: CartEntitiesType,
    cartOperation: CartOperation
  ) {
    switch (cartOperation) {
      case CartOperation.increment:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(addToCartAction(cartItem))
        break

      case CartOperation.decrement:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(removeFromCartAction(cartItem))
        break

      case CartOperation.delete:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
