"use client"

import { UICardProduct } from "@/domain/Category/components/UICardProduct/UICardProduct"
import { IProduct, IProductAction } from "@/domain/Category/types/types"
import { UIGrid } from "@/domain/_components/UIGrid/UIGrid"

interface IProps extends IProductAction {
  entity: IProduct[] | undefined
}

export async function UICardList(props: IProps) {
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

  function renderList() {
    if (props.entity) {
      return props.entity.map((item) => {
        return (
          <UICardProduct
            key={item.id}
            image={item.image}
            caption={item.caption}
            id={item.id}
            add={() => props.add(item)}
            price={item.price}
          />
        )
      })
    } else {
      return []
    }
  }

  return <UIGrid>{list}</UIGrid>
}
