export type TProductId = string | number
export type TProductPrice = string

export interface IProduct {
  id: TProductId
  image: string
  caption: string
  description?: string
  price: TProductPrice
}

export interface IProductAction {
  add(product: IProduct): void
}
