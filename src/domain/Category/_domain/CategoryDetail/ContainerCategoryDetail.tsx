"use client"

import {
  getCategoryList,
  IShop,
} from "@/domain/Category/actions/actionCategoryDetail"
import { UICardList } from "@/domain/Category/components/UICardList/UICardList"
import { IProduct } from "@/domain/Category/types/types"
import { adapterAddToCart } from "@/domain/Cart/adapters/adapterAddToCart"
import { useContextCartMethods } from "@/domain/Cart/providers/ProviderCart"
import useSWR from "swr"

interface IProps {
  slugCategory: string
}

export function ContainerCategoryDetail(props: IProps) {
  const { data, error, isLoading } = useSWR(props.slugCategory, getCategoryList)
  const cartMethods = useContextCartMethods()

  function handleAddToCart(product: IProduct) {
    cartMethods.add(adapterAddToCart(product))
  }

  const dataAdaptive = getDataAdaptive(data)

  function getDataAdaptive(data: IShop | undefined) {
    if (!data) return []

    return data.items.map((item) => {
      return {
        id: item.id,
        image: item.imageUrl,
        caption: item.name,
        price: item.price,
      }
    })
  }

  return <UICardList entity={dataAdaptive} add={handleAddToCart} />
}
