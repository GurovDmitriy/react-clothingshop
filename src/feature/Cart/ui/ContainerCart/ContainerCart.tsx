import {
  ICartProduct,
  UICartList,
  UICartSummary,
  useContextCartMethods,
  useContextCartState,
} from "@/entities/Cart"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

export function ContainerCart() {
  const cartState = useContextCartState()
  const cartMethods = useContextCartMethods()
  const list = Object.values(cartState.cart)

  function handleIncrease(product: ICartProduct) {
    cartMethods.increase(product)
  }

  function handleDecrease(product: ICartProduct) {
    cartMethods.decrease(product)
  }

  function handleRemove(product: ICartProduct) {
    cartMethods.remove(product)
  }

  return (
    <div>
      <Spin spinning={cartState.pending} indicator={<LoadingOutlined />}>
        <UICartList
          entity={list}
          increase={handleIncrease}
          decrease={handleDecrease}
          remove={handleRemove}
        />
      </Spin>
      <UICartSummary total={cartState.total} />
    </div>
  )
}
