"use client"

import { UICard } from "@/domain/_components/UICard/UICard"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"
import {
  IProduct,
  IProductAction,
  TProductId,
  TProductPrice,
} from "@/domain/Category/types/types"

interface IProps extends IProductAction, IProduct {}

export async function UICardProduct(props: IProps) {
  function renderButtonAdd(id: TProductId) {
    return (
      <Button
        type="text"
        key="add"
        onClick={() => props.add(id)}
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
      actions={[renderButtonAdd(props.id), renderPrice(props.price)]}
    />
  )
}
