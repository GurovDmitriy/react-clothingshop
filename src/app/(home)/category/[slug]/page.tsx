import { ContainerCategoryDetail } from "@/domain/Category/_domain/CategoryDetail/ContainerCategoryDetail"
import { SkeletonCardCategory } from "@/domain/Category/_domain/CategoryAll/components/SkeletonCardCategory/SkeletonCardCategory"
import { Suspense } from "react"
import { actionCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/actions/actionCategoryPreview"

interface IProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const categories = await actionCategoryPreview()

  return categories.map((category) => ({
    slug: category.value,
  }))
}

export default function PageCategory(props: IProps) {
  return (
    <Suspense fallback={<SkeletonCardCategory />}>
      <ContainerCategoryDetail slugCategory={props.params.slug} />
    </Suspense>
  )
}
