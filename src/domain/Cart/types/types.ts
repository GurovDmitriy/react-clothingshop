import { TProductId } from "@/domain/Category/types/types"

export interface ICart {
  [key: string]: ICartProduct
}

export interface ICartProduct {
  id: TProductId
  name: string
  imageUrl: string
  count: number
  price: number
}

export interface ICartState {
  cart: ICart
  total: string
}

export interface ICartMethods {
  fetch(): any
  add(product: ICartProduct): void
  remove(product: ICartProduct): void
  increase(product: ICartProduct): void
  decrease(product: ICartProduct): void
}
