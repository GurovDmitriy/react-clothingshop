"use client"

import { UICard } from "@/domain/_components/UICard/UICard"
import { UIGrid } from "@/domain/_components/UIGrid/UIGrid"
import {
  ICardDetail,
  TCardDetailList,
} from "@/domain/Category/_domain/CategoryDetail/types/types"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"

interface IProps {
  entity: TCardDetailList | undefined
}

export async function UICardCategoryDetailList(props: IProps) {
  const list = getList()

  function getList() {
    if (props.entity) {
      return renderList()
    } else {
      return renderNoData()
    }
  }

  function renderNoData() {
    return <div>no data</div>
  }

  function renderButtonAdd(item: ICardDetail) {
    return (
      <Button
        type="text"
        key="add"
        onClick={() => item.add(item.id)}
        icon={<ShoppingCartOutlined />}
      ></Button>
    )
  }

  function renderPrice(item: ICardDetail) {
    return <div key="price">{item.price}</div>
  }

  function renderList() {
    if (props.entity) {
      return props.entity.map((item) => {
        return (
          <UICard
            key={item.id}
            image={item.image}
            caption={item.caption}
            actions={[renderButtonAdd(item), renderPrice(item)]}
          />
        )
      })
    } else {
      return []
    }
  }

  return <UIGrid>{list}</UIGrid>
}
