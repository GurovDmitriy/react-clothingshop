"use client"

import { getCategoryList } from "@/domain/Category/actions/actionCategoryDetail"
import { UICardCategoryDetailList } from "@/domain/Category/_domain/CategoryDetail/UICardCategoryDetailList/UICardCategoryDetailList"

interface IProps {
  slugCategory: string
}

export async function ContainerCategoryDetail(props: IProps) {
  const data = await getCategoryList(props.slugCategory)

  function handleAddToCart(id: string | number) {
    console.log("add to cart")
  }

  const dataAdaptive = data?.items.map((item) => {
    return {
      id: item.id,
      image: item.imageUrl,
      caption: item.name,
      price: item.price,
      add: handleAddToCart,
    }
  })

  return <UICardCategoryDetailList entity={dataAdaptive} />
}
