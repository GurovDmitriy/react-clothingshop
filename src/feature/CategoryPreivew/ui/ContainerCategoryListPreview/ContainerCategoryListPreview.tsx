import { useModelCategory } from "@/entities/Category"
import { UICategoryListPreview } from "@/entities/Category/ui"
import { UICard } from "@/entities/Category/ui/UICard/UICard"
import Link from "next/link"

export function ContainerCategoryListPreview() {
  const modelCategory = useModelCategory()

  const cardsPreview = modelCategory.listPreview.map((item) => (
    <Link href={`/category/${item.value}`} key={item.id}>
      <UICard
        image={item.image}
        caption={item.caption}
        description={item.description}
      />
    </Link>
  ))

  return <UICategoryListPreview>{cardsPreview}</UICategoryListPreview>
}
