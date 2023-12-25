import { ICardCategory } from "@/domain/Category/types/types"

export function actionCategoryPreview(): Promise<Array<ICardCategory>> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data)
    }, 1200),
  )
}

const data: Array<ICardCategory> = [
  {
    id: 1,
    caption: "Hats",
    description: "Shop now",
    link: "/shop/hats",
    image: "images/hats.png",
  },
  {
    id: 2,
    caption: "Jackets",
    description: "Shop now",
    link: "/shop/jackets",
    image: "images/jackets.png",
  },
  {
    id: 3,
    caption: "Sneakers",
    description: "Shop now",
    link: "/shop/sneakers",
    image: "images/sneakers.png",
  },
  {
    id: 4,
    caption: "Womens",
    description: "Shop now",
    link: "/shop/womens",
    image: "images/womens.png",
  },
  {
    id: 5,
    caption: "Mens",
    description: "Shop now",
    link: "/shop/mens",
    image: "images/men.png",
  },
]
