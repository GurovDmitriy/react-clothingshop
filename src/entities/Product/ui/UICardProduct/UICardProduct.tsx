"use client"

import { IProduct, IProductAction, TProductPrice } from "@/entities/Product"
import { UICard } from "@/shared/ui/UICard/UICard"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"

interface IProps extends IProductAction, IProduct {}

export function UICardProduct(props: IProps) {
  function renderButtonAdd() {
    return (
      <Button
        type="text"
        key="add"
        onClick={() => props.add()}
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
