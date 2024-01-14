import { modelCategory } from "@/entities/Category/model"
import { UICategoryListPreview } from "@/entities/Category/ui"
import { UICard } from "@/entities/Category/ui/UICard/UICard"
import Link from "next/link"

export function ContainerCategoryListPreview() {
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
