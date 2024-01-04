import { UICartList } from "@/domain/Cart/components/UICartList/UICartList"
import { UICartSummary } from "@/domain/Cart/components/UICartSummary/UICartSummary"
import {
  useContextCartMethods,
  useContextCartState,
} from "@/domain/Cart/providers/ProviderCart"
import { ICartProduct } from "@/domain/Cart/types/types"
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
