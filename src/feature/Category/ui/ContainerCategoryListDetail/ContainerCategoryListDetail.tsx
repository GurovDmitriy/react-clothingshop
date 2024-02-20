"use client"

import { useContextCartMethods } from "@/entities/Cart"
import { IProduct, useModelCategory } from "@/entities/Category"
import { UICategoryList } from "@/entities/Category/ui"
import { TProductId, TProductPrice, UICardProduct } from "@/entities/Product"
import {
  adapterAddToCart,
  adapterCategoryListItem,
} from "@/feature/Category/adapters"
import useSWR from "swr"

interface IProps {
  slugCategory: string
}

export function ContainerCategoryListDetail(props: IProps) {
  const modelCategory = useModelCategory()

  const { data } = useSWR(props.slugCategory, modelCategory.fetchListBySlug, {
    suspense: true,
  })

  const cartMethods = useContextCartMethods()

  const dataAdaptive = adapterCategoryListItem(data?.items)
  const productList = renderProductList(dataAdaptive)

  function renderProductList(
    data: IProduct<TProductId, TProductPrice>[] | undefined,
  ) {
    if (!data) return []

    return dataAdaptive.map((product) => {
      return (
        <UICardProduct
          id={product.id}
          key={product.id}
          caption={product.caption}
          image={product.image}
          price={product.price}
          add={() => cartMethods.add(adapterAddToCart(product))}
        />
      )
    })
  }

  return <UICategoryList>{productList}</UICategoryList>
}
