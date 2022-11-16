import classNames from "classnames"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartBox from "../../components/CartBox/CartBox"
import { fetchCartAction } from "../../store/cart/cartAction"
import { selectCart } from "../../store/cart/cartSelector"

function CartPage({ className }) {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)

  const cartEntities = cart ? Object.values(cart) : []

  useEffect(() => {
    dispatch(fetchCartAction())
  }, [])

  const handleChangeCount = (id, value) => {
    console.log(id, value)
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
