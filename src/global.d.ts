declare type ChildrenType = JSX.Element | string | number

declare enum ActionStatus {
  useless = "useless",
  pending = "pending",
  success = "success",
  failure = "failure",
}

declare enum CartOperation {
  increment = "increment",
  decrement = "decrement",
  delete = "delete",
  clear = "clear",
}

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

declare type CollectionPreviewItemEntities = {
  name: string
  imageUrl: string
  price: number
}
