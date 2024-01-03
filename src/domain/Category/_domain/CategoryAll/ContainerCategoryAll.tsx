"use client"

import {
  getShopList,
  IShop,
  IShopItem,
} from "@/domain/Category/actions/actionCategoryDetail"
import { UICardListSplit } from "@/domain/Category/_domain/CategoryAll/UICardListSplit/UICardListSplit"
import { IProduct } from "@/domain/Category/types/types"
import { useContextCartMethods } from "@/domain/Cart/providers/ProviderCart"
import { adapterAddToCart } from "@/domain/Cart/adapters/adapterAddToCart"
import useSWR from "swr"

export async function ContainerCategoryAll() {
  const { data, error, isLoading } = useSWR("allProducts", getShopList)
  const cartMethods = useContextCartMethods()

  const dataAdaptive = getDataAdaptive(data!)

  function handleAddToCart(product: IProduct) {
    cartMethods.add(adapterAddToCart(product))
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

  return <UICardListSplit entity={dataAdaptive} add={handleAddToCart} />
}
