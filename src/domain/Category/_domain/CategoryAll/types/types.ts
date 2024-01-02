import { IProduct } from "@/domain/Category/types/types"

export interface ICategoryAll {
  id: string | number
  title: string
  link: string
  items: IProduct[]
}
