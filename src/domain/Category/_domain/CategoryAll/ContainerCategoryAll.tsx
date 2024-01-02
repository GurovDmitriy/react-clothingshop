"use client"

import {
  getShopList,
  IShop,
  IShopItem,
} from "@/domain/Category/actions/actionCategoryDetail"
import { UICardListSplit } from "@/domain/Category/_domain/CategoryAll/UICardListSplit/UICardListSplit"

export async function ContainerCategoryAll() {
  const data = await getShopList()
  const dataAdaptive = getDataAdaptive(data)

  function handleAddToCart(id: string | number) {
    console.log("add to cart")
  }

  function getDataAdaptive(item: IShop[]) {
    return item.map((item) => {
      return {
        id: item.id,
        title: item.title,
        link: `/category/${item.value}`,
        items: itemAdaptive(item.items),
      }
    })
  }

  function itemAdaptive(item: IShopItem[]) {
    return item.map((item) => {
      return {
        id: item.id,
        image: item.imageUrl,
        caption: item.name,
        price: item.price,
      }
    })
  }

  return <UICardListSplit entity={dataAdaptive} add={handleAddToCart} />
}
