import classNames from "classnames"
import PropTypes from "prop-types"

function CartPage({ className }) {
  const cartPageClasses = classNames("cart-page", className)

  return <div className={cartPageClasses}>cart page</div>
}

CartPage.propTypes = {
  className: PropTypes.string,
}

export default CartPage
