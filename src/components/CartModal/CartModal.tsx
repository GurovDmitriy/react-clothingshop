import classNames from "classnames"
import { CartEntities } from "../../firebaseSDK/cart/cart"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import "./style.scss"

function CartModal(props: CartModalProps) {
  const { className, entities, handlerToCart } = props

  const cartModalClass = classNames("cart-modal", className)
  const cartEntities = renderCartEntities()

  function renderCartEntities() {
    let component = null

    if (entities && entities.length) {
      component = getListItems()
    } else {
      component = getListEmpty()
    }

    return component
  }

  function getListItems() {
    if (!entities || !entities.length) return null

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

  function getListEmpty() {
    return <span className="cart-modal__empty">Empty</span>
  }

  return (
    <div className={cartModalClass}>
      <div className="cart-modal__body">{cartEntities}</div>
      <div className="cart-modal__btn-box">
        <ButtonDefault
          type="button"
          className="cart-modal__btn"
          handlerClick={handlerToCart}
        >
          Go to checkout
        </ButtonDefault>
      </div>
    </div>
  )
}

type CartModalProps = {
  className?: string
  handlerToCart: (...args: any[]) => void
  entities?: Array<CartEntities> | null
}

export default CartModal
