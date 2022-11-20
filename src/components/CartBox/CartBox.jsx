import classNames from "classnames"
import PropTypes from "prop-types"
import { ReactComponent as IconDec } from "../../assets/images/decrement.svg"
import { ReactComponent as IconDel } from "../../assets/images/delete.svg"
import { ReactComponent as IconInc } from "../../assets/images/increment.svg"
import cartOperationTypes from "../../store/types/cartOperationTypes"
import "./style.scss"

function CartBox({ className, entities, handleChangeCount, totalPrice }) {
  const renderCartBoxItems = () => {
    return entities.map((item) => {
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
                className="cart-box__item-btn cart-box__item-btn--dec"
                onClick={() =>
                  handleChangeCount(item, cartOperationTypes.decrement)
                }
              >
                <IconDec />
              </button>
              <span className="cart-box__item-quantity">{item.count}</span>
              <button
                className="cart-box__item-btn cart-box__item-btn--inc"
                onClick={() =>
                  handleChangeCount(item, cartOperationTypes.increment)
                }
              >
                <IconInc />
              </button>
            </span>
          </td>
          <td>
            <span className="cart-box__item-price">${item.price}</span>
          </td>
          <td>
            <button
              className="cart-box__item-btn cart-box__item-btn--del"
              onClick={() => handleChangeCount(item, cartOperationTypes.delete)}
            >
              <IconDel />
            </button>
          </td>
        </tr>
      )
    })
  }

  const renderCartEntities = () => {
    let component = null

    if (entities.length) {
      component = renderCartBoxItems()
    } else {
      component = (
        <tr>
          <td>
            <span className="cart-box__empty">Empty</span>
          </td>
        </tr>
      )
    }

    return component
  }

  const cartPageClass = classNames("cart-box", className)

  return (
    <div className={cartPageClass}>
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
        <tbody>{renderCartEntities()}</tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total: $ {totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

CartBox.defaultProps = {
  entities: [],
  totalPrice: 0,
}

CartBox.propTypes = {
  className: PropTypes.string,
  totalPrice: PropTypes.number,
  entities: PropTypes.array,
  handleChangeCount: PropTypes.func,
}

export default CartBox
