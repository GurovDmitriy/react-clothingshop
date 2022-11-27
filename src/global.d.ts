declare type ChildrenType = JSX.Element | string | number

declare type ActionStatusType = "useless" | "pending" | "success" | "failure"

declare type CartOperationType = "increment" | "decrement" | "delete" | "clear"

declare type CartEntitiesType = {
  imageUrl: string
  name: string
  id: string | number
  count: number
  price: number
}

declare type CategoryType = {
  id: number
  caption: string
  description: string
  link: string
  image: string
}

declare type ShopType = {
  id: number
  title: string
  routeName: string
  items: {
    id: number
    name: string
    imageUrl: string
    price: number
  }[]
}
