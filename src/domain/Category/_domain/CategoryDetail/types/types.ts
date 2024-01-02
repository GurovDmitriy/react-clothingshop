export interface ICardDetail {
  id: string | number
  image: string
  caption: string
  price: string | number
  add(id: string | number): void
}

export type TCardDetailList = ICardDetail[]
