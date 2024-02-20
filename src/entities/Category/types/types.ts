export interface IProduct<I, P> {
  id: I
  image: string
  caption: string
  price: P
}

export interface ICategoryAll<I, P> {
  id: string | number
  title: string
  link: string
  items: IProduct<I, P>[]
}
