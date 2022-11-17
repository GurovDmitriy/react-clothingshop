import classNames from "classnames"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartBox from "../../components/CartBox/CartBox"
import { fetchCartAction, updateCartAction } from "../../store/cart/cartAction"
import { selectCart } from "../../store/cart/cartSelector"
import cartOperationTypes from "../../store/cartOperationTypes"

function CartPage({ className }) {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)

  const cartEntities = cart ? Object.values(cart) : []

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
      <CartBox
        className="cart-page__cart-box"
        handleChangeCount={handleChangeCount}
        entities={cartEntities}
      />
    </div>
  )
}

CartPage.propTypes = {
  className: PropTypes.string,
}

export default CartPage
