"use client"

import { useContextCartMethods } from "@/entities/Cart"
import { modelCategory } from "@/entities/Category"
import { UICategoryListAll } from "@/entities/Category/ui"
import { IProduct, UICardProduct } from "@/entities/Product"
import { adapterCategoryList } from "@/feature/Category/adapters"
import useSWR from "swr"

export function ContainerCategoryListAll() {
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
        add={() => cartMethods.add(product)}
      />
    )
  }

  return (
    <UICategoryListAll entity={dataAdaptive}>{renderProduct}</UICategoryListAll>
  )
}
