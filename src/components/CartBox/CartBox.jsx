import classNames from "classnames"
import PropTypes from "prop-types"
import cartOperationTypes from "../../store/cartOperationTypes"

function CartBox({ className, entities, handleChangeCount }) {
  const cartPageClasses = classNames("cart-box", className)

  const itemList = entities.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <div className="cart-box__item-image-box">
            <img
              className="cart-box__item-image"
              src={item.imageUrl}
              alt="cloth"
              width="100"
              height="150"
            />
          </div>
        </td>
        <td>
          <span className="cart-box__item-caption">{item.name}</span>
        </td>
        <td>
          <span className="cart-box__item-quantity">
            <button
              className="cart-box__item-quantity-dec"
              onClick={() =>
                handleChangeCount(item, cartOperationTypes.decrement)
              }
            >
              -
            </button>
            <span className="cart-box__item-quantity">{item.count}</span>
            <button
              className="cart-box__item-quantity-inc"
              onClick={() =>
                handleChangeCount(item, cartOperationTypes.increment)
              }
            >
              +
            </button>
          </span>
        </td>
        <td>
          <span className="cart-box__item-price">${item.price}</span>
        </td>
        <td>
          <button
            className="cart-box__item-remove"
            onClick={() => handleChangeCount(item, cartOperationTypes.delete)}
          >
            del
          </button>
        </td>
      </tr>
    )
  })

  return (
    <div className={cartPageClasses}>
      <table className="cart-box__table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{itemList}</tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>total</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

CartBox.defaultProps = {
  entities: [],
}

CartBox.propTypes = {
  className: PropTypes.string,
  entities: PropTypes.array,
  handleChangeCount: PropTypes.func,
}

export default CartBox
