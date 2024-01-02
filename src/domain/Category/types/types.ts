export interface ICardCategory {
  id: number
  caption: string
  description: string
  link: string
  image: string
}

export type TCardCategoryList = ICardCategory[]

export interface IShopItem {
  id: number
  name: string
  imageUrl: string
  price: number
}

export type TShopItemList = IShopItem[]

export interface IShop {
  id: number
  title: string
  routeName: string
  items: TShopItemList
}

export type TShopList = IShop[]
