"use client"

import { useContextCartMethods } from "@/entities/Cart"
import { IProduct, modelCategory } from "@/entities/Category"
import { UICategoryList } from "@/entities/Category/ui"
import { UICardProduct } from "@/entities/Product"
import { adapterCategoryListItem } from "@/feature/Category/adapters"
import useSWR from "swr"

interface IProps {
  slugCategory: string
}

export function ContainerCategoryListDetail(props: IProps) {
  const { data } = useSWR(props.slugCategory, modelCategory.fetchListBySlug, {
    suspense: true,
  })

  const cartMethods = useContextCartMethods()

  const dataAdaptive = adapterCategoryListItem(data?.items)
  const productList = renderProductList(dataAdaptive)

  function renderProductList(data: IProduct[] | undefined) {
    if (!data) return []

    return dataAdaptive.map((product) => {
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
    })
  }

  return <UICategoryList>{productList}</UICategoryList>
}
