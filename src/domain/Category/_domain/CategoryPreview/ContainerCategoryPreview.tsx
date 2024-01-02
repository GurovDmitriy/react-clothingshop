import { actionCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/actions/actionCategoryPreview"
import { UICardList } from "@/domain/Category/_domain/CategoryPreview/components/UICardList/UICardList"

export async function ContainerCategoryPreview() {
  const data = await actionCategoryPreview()
  const dataAdaptive = data.map((item) => ({
    id: item.id,
    link: `/category/${item.value}`,
    image: `/images/${item.image}`,
    caption: item.caption,
    description: item.description,
  }))

  return <UICardList entity={dataAdaptive} />
}
