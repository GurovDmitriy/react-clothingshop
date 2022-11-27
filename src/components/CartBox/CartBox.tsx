import classNames from "classnames"
import { ReactComponent as IconDec } from "../../assets/images/decrement.svg"
import { ReactComponent as IconDel } from "../../assets/images/delete.svg"
import { ReactComponent as IconInc } from "../../assets/images/increment.svg"
import cartOperationTypes from "../../helpers/cartOperationTypes"
import "./style.scss"

CartBox.defaultProps = {
  entities: [],
  totalPrice: 0,
}

type CartBoxProps = {
  className?: string
  totalPrice?: number
  entities?: Array<CartEntitiesType>
  handlerChangeCount: (
    item: CartEntitiesType,
    operation: CartOperationType
  ) => void
} & typeof CartBox.defaultProps

function CartBox(props: CartBoxProps) {
  const { className, entities, handlerChangeCount, totalPrice } = props

  const cartPageClass = classNames("cart-box", className)

  const cartEntities = renderCartEntities()

  function renderCartEntities() {
    let component = null

    if (entities.length) {
      component = getCartBoxItems()
    } else {
      component = getCartBoxEmpty()
    }

    return component
  }

  function getCartBoxItems() {
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
                  handlerChangeCount(item, cartOperationTypes.decrement)
                }
              >
                <IconDec />
              </button>
              <span className="cart-box__item-quantity">{item.count}</span>
              <button
                className="cart-box__item-btn cart-box__item-btn--inc"
                onClick={() =>
                  handlerChangeCount(item, cartOperationTypes.increment)
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
              onClick={() =>
                handlerChangeCount(item, cartOperationTypes.delete)
              }
            >
              <IconDel />
            </button>
          </td>
        </tr>
      )
    })
  }

  function getCartBoxEmpty() {
    return (
      <tr>
        <td>
          <span className="cart-box__empty">Empty</span>
        </td>
      </tr>
    )
  }

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
        <tbody>{cartEntities}</tbody>
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

export default CartBox
