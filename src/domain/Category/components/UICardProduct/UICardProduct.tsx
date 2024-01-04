"use client"

import {
  IProduct,
  IProductAction,
  TProductPrice,
} from "@/domain/Category/types/types"
import { UICard } from "@/domain/_components/UICard/UICard"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"

interface IProps extends IProductAction, IProduct {
  add(): void
}

export async function UICardProduct(props: IProps) {
  function renderButtonAdd() {
    return (
      <Button
        type="text"
        key="add"
        onClick={props.add}
        icon={<ShoppingCartOutlined />}
      ></Button>
    )
  }

  function renderPrice(price: TProductPrice) {
    return <div key="price">{price}</div>
  }

  return (
    <UICard
      key={props.id}
      image={props.image}
      caption={props.caption}
      actions={[renderButtonAdd(), renderPrice(props.price)]}
    />
  )
}
