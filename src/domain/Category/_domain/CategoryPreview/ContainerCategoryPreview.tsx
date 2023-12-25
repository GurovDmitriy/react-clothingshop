import { actionCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/actions/actionCategoryPreview"
import { UICardCategory } from "@/domain/Category/_domain/CategoryPreview/components/UICardCategory/UICardCategory"

export async function ContainerCategoryPreview() {
  const data = await actionCategoryPreview()

  const list = renderList()

  function renderList() {
    return data.map((item) => <UICardCategory key={item.id} entity={item} />)
  }

  return <div>{list}</div>
}
