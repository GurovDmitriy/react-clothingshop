import classNames from "classnames"
import PropTypes from "prop-types"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import "./style.scss"

function CartModal({ className, entities, handleToCart }) {
  function renderListItems() {
    return entities.map((item) => {
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
  }

  function renderCartEntities() {
    let component = null

    if (entities.length) {
      component = renderListItems()
    } else {
      component = <span>Empty</span>
    }

    return component
  }

  const cartModalClass = classNames("cart-modal", className)

  return (
    <div className={cartModalClass}>
      <div className="cart-modal__body">{renderCartEntities()}</div>
      <div className="cart-modal__btn-box">
        <ButtonDefault className="cart-modal__btn" handleClick={handleToCart}>
          Go to checkout
        </ButtonDefault>
      </div>
    </div>
  )
}

CartModal.defaultProps = {
  entities: [],
}

CartModal.propTypes = {
  className: PropTypes.string,
  handleToCart: PropTypes.func,
  entities: PropTypes.array,
}

export default CartModal
