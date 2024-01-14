import { TProductId, TProductPrice } from "@/entities/Product"

// export interface ICategoryPreview {
//   id: number
//   image: string
//   caption: string
//   link: string
//   description?: string
// }

export interface IProduct {
  id: TProductId
  image: string
  caption: string
  price: TProductPrice
}

export interface ICategoryAll {
  id: string | number
  title: string
  link: string
  items: IProduct[]
}
