import { UICardList } from "@/domain/Category/_domain/CategoryPreview/components/UICardList/UICardList"
import { UIGridMain } from "@/domain/_components/UIGridMaiin/UIGridMain"

export interface ICategory {
  id: number
  value: string
  image: string
  caption: string
  description?: string
}

const data: Array<ICategory> = [
  {
    id: 1,
    caption: "Hats",
    description: "Shop now",
    value: "hats",
    image: "https://i.postimg.cc/Nfs1YZW9/hats.png",
  },
  {
    id: 2,
    caption: "Jackets",
    description: "Shop now",
    value: "jackets",
    image: "https://i.postimg.cc/PfzmgdFn/jackets.png",
  },
  {
    id: 3,
    caption: "Sneakers",
    description: "Shop now",
    value: "sneakers",
    image: "https://i.postimg.cc/pTMFSSfd/sneakers.png",
  },
  {
    id: 4,
    caption: "Womens",
    description: "Shop now",
    value: "womens",
    image: "https://i.postimg.cc/8PZLCtSy/womens.png",
  },
  {
    id: 5,
    caption: "Mens",
    description: "Shop now",
    value: "mens",
    image: "https://i.postimg.cc/rsQRKFvd/men.png",
  },
]

export function ContainerCategoryPreview() {
  const dataAdaptive = data.map((item) => ({
    id: item.id,
    link: `/category/${item.value}`,
    image: item.image,
    caption: item.caption,
    description: item.description,
  }))

  return (
    <UIGridMain>
      <UICardList entity={dataAdaptive} />
    </UIGridMain>
  )
}
