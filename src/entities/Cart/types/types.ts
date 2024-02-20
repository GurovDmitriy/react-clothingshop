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

export interface IModelCart {
  cart: ICart
  total: number
  pending: boolean
  add(product: ICartProduct): void
  remove(product: ICartProduct): void
  increase(product: ICartProduct): void
  decrease(product: ICartProduct): void
}
