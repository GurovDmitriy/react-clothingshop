import classNames from "classnames"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartBox from "../../components/CartBox/CartBox"
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock"
import { fetchCartAction, updateCartAction } from "../../store/cart/cartAction"
import {
  selectCart,
  selectCartStatusFetch,
  selectCartTotalPrice,
} from "../../store/cart/cartSelector"
import actionStatusTypes from "../../store/types/actionStatusTypes"
import cartOperationTypes from "../../store/types/cartOperationTypes"
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

  const handleChangeCount = (cartItem, cartOperation) => {
    switch (cartOperation) {
      case cartOperationTypes.increment:
        dispatch(
          updateCartAction({
            cartItem,
            cartOperation: cartOperationTypes.increment,
          })
        )
        break

      case cartOperationTypes.decrement:
        dispatch(
          updateCartAction({
            cartItem,
            cartOperation: cartOperationTypes.decrement,
          })
        )
        break

      case cartOperationTypes.delete:
        dispatch(
          updateCartAction({
            cartItem,
            cartOperation: cartOperationTypes.delete,
          })
        )
        break

      default:
        return
    }
  }

  const cartPageClasses = classNames("cart-page", className)

  return (
    <div className={cartPageClasses}>
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
