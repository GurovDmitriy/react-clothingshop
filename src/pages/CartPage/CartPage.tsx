import classNames from "classnames"
import { useEffect } from "react"
import CartBox from "../../components/CartBox/CartBox"
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock"
import {actionStatusTypes, cartOperationTypes} from "../../helpers/constants"
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
import "./style.scss"
import {useAppDispatch, useAppSelector} from "../../store/hooks";

function CartPage(props: CartPageProps) {
  const {className} = props

  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCart)
  const totalPrice = useAppSelector(selectCartTotalPrice)
  const cartStateFetch = useAppSelector(selectCartStatusFetch)

  const cartEntities = cart ? Object.values(cart) : []
  const loading = cartStateFetch === actionStatusTypes.pending

  useEffect(() => {
    dispatch(fetchCartAction())
  }, [])

  async function handleChangeCount(cartItem: CartEntitiesType, cartOperation: CartOperation) {
    switch (cartOperation) {
      case cartOperationTypes.increment:
        dispatch(addToCartAction(cartItem))
        break

      case cartOperationTypes.decrement:
        dispatch(removeFromCartAction(cartItem))
        break

      case cartOperationTypes.delete:
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
        handleChangeCount={handleChangeCount}
        entities={cartEntities}
        totalPrice={totalPrice}
      />
    </div>
  )
}

type CartPageProps = {
  className: string
}

export default CartPage
