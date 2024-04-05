import { ICategoryAll, IProduct } from "@/entities/Category"
import {
  ICategoryAll as ICategoryAllBackend,
  IProduct as IProductBackend,
} from "@/entities/Category/model/data"
import { TProductId, TProductPrice } from "@/entities/Product"

function adapterCategoryList(
  data: ICategoryAllBackend[],
): ICategoryAll<TProductId, TProductPrice>[] {
  return data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      link: `/category/${item.value}`,
      items: adapterCategoryListItem(item.items),
    }
  })
}

function adapterCategoryListItem(
  item: IProductBackend[] | undefined,
): IProduct<TProductId, TProductPrice>[] {
  if (!item) return []

  return item.map((item) => {
    return {
      id: item.id,
      image: item.imageUrl,
      caption: item.name,
      price: item.price,
    }
  })
}

export { adapterCategoryList, adapterCategoryListItem }
