import classNames from "classnames"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartBox from "../../components/CartBox/CartBox"
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock"
import cartOperationTypes from "../../helpers/cartOperationTypes"
import actionStatusTypes from "../../helpers/constants"
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

function CartPage({ className }) {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)
  const totalPrice = useSelector(selectCartTotalPrice)
  const cartStateFetch = useSelector(selectCartStatusFetch)

  const cartEntities = cart ? Object.values(cart) : []
  const loading = cartStateFetch === actionStatusTypes.pending

  useEffect(() => {
    dispatch(fetchCartAction())
  }, [])

  async function handleChangeCount(cartItem, cartOperation) {
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

CartPage.propTypes = {
  className: PropTypes.string,
}

export default CartPage
