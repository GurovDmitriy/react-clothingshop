"use client"

import { adapterAddToCart } from "@/domain/Cart/adapters/adapterAddToCart"
import { useContextCartMethods } from "@/domain/Cart/providers/ProviderCart"
import { UICardListSplit } from "@/domain/Category/_domain/CategoryAll/components/UICardListSplit/UICardListSplit"
import {
  getShopList,
  IShop,
  IShopItem,
} from "@/domain/Category/actions/actionCategoryDetail"
import { IProduct } from "@/domain/Category/types/types"
import useSWR from "swr"

export function ContainerCategoryAll() {
  const { data } = useSWR("allProducts", getShopList, {
    suspense: true,
  })
  const cartMethods = useContextCartMethods()

  const dataAdaptive = getDataAdaptive(data!)

  function handleAddToCart(product: IProduct) {
    cartMethods.add(adapterAddToCart(product))
  }

  return <UICardListSplit entity={dataAdaptive} add={handleAddToCart} />
}

function getDataAdaptive(item: IShop[] | undefined) {
  if (!item) return []

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
