import { IProduct } from "@/entities/Product"

export interface ICart {
  [key: string]: ICartProduct
}

export interface ICartProduct {
  id: string | number
  name: string
  imageUrl: string
  count: number
  price: number
}

export interface ICartState {
  cart: ICart
  total: number
}

export interface ICartMethods {
  add(product: IProduct): void
  remove(product: ICartProduct): void
  increase(product: ICartProduct): void
  decrease(product: ICartProduct): void
}

export interface IAuth {
  user: {
    uid: string
  }
  isAuth: boolean
}
