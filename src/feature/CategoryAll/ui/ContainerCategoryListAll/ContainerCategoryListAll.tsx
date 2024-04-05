"use client"

import { useContextCartMethods } from "@/entities/Cart"
import {
  adapterAddToCart,
  adapterCategoryList,
  useModelCategory,
} from "@/entities/Category"
import { UICategoryListAll } from "@/entities/Category/ui"
import { IProduct, UICardProduct } from "@/entities/Product"
import useSWR from "swr"

export function ContainerCategoryListAll() {
  const modelCategory = useModelCategory()

  const { data } = useSWR("allProducts", modelCategory.fetchListAll, {
    suspense: true,
  })

  const cartMethods = useContextCartMethods()
  const dataAdaptive = adapterCategoryList(data)

  function renderProduct(product: IProduct) {
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
  }

  return (
    <UICategoryListAll entity={dataAdaptive}>{renderProduct}</UICategoryListAll>
  )
}
