import classNames from "classnames"
import PropTypes from "prop-types"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import "./style.scss"

function CartModal({ className, list, handleToCart }) {
  const cartModalClasses = classNames("cart-modal", className)

  const listItems = list.map((item) => {
    return (
      <div className="cart-modal__item" key={item.id}>
        <div className="cart-modal__img-box">
          <img
            src={item.imageUrl}
            alt="cloth"
            width="50"
            height="100"
            className="cart-modal__img"
          />
        </div>
        <div className="cart-modal__content-box">
          <p className="cart-modal__name">{item.name}</p>
          <p className="cart-modal__price-box">
            <span>{item.count}</span>&nbsp;X&nbsp;<span>${item.price}</span>
          </p>
        </div>
      </div>
    )
  })

  return (
    <div className={cartModalClasses}>
      <div className="cart-modal__body">
        {listItems.length ? listItems : "empty"}
      </div>
      <div className="cart-modal__btn-box">
        <ButtonDefault handleClick={handleToCart}>Go to checkout</ButtonDefault>
      </div>
    </div>
  )
}

CartModal.defaultProps = {
  list: [],
}

CartModal.propTypes = {
  className: PropTypes.string,
  handleToCart: PropTypes.func,
  list: PropTypes.array,
}

export default CartModal
