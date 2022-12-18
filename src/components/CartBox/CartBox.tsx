import classNames from "classnames"
import { BsChevronLeft, BsChevronRight, BsDashSquare } from "react-icons/bs"
// import { ReactComponent as IconDec } from "../../assets/images/decrement.svg"
// import { ReactComponent as IconDel } from "../../assets/images/delete.svg"
// import { ReactComponent as IconInc } from "../../assets/images/increment.svg"
import { CartEntities, CartOperation } from "../../firebaseSDK/cart/cart"
import "./style.scss"

function CartBox(props: CartBoxProps) {
  const { className, entities, handlerChangeCount, totalPrice } = props

  const cartPageClass = classNames("cart-box", className)

  const cartEntities = renderCartEntities()

  function renderCartEntities() {
    let component = null

    if (entities && entities.length) {
      component = getCartBoxItems()
    } else {
      component = getCartBoxEmpty()
    }

    return component
  }

  function getCartBoxItems() {
    if (!entities || !entities.length) return null

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
                  handlerChangeCount(item, CartOperation.decrement)
                }
              >
                <BsChevronLeft />
              </button>
              <span className="cart-box__item-quantity">{item.count}</span>
              <button
                className="cart-box__item-btn cart-box__item-btn--inc"
                onClick={() =>
                  handlerChangeCount(item, CartOperation.increment)
                }
              >
                <BsChevronRight />
              </button>
            </span>
          </td>
          <td>
            <span className="cart-box__item-price">${item.price}</span>
          </td>
          <td>
            <button
              className="cart-box__item-btn cart-box__item-btn--del"
              onClick={() => handlerChangeCount(item, CartOperation.delete)}
            >
              <BsDashSquare />
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

CartBox.defaultProps = {
  totalPrice: 0,
}

type CartBoxProps = {
  className?: string
  totalPrice?: number
  entities?: Array<CartEntities> | null
  handlerChangeCount: (item: CartEntities, operation: CartOperation) => void
}

export default CartBox
