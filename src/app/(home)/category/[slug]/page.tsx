import { fetchListPreview, SkeletonCategoryListAll } from "@/entities/Category"
import { ContainerCategoryListDetail } from "@/feature/CategoryDetail"
import { Suspense } from "react"

interface IProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const categories = await fetchListPreview()

  return categories.map((category) => ({
    slug: category.value,
  }))
}

export default function PageCategory(props: IProps) {
  return (
    <Suspense fallback={<SkeletonCategoryListAll />}>
      <ContainerCategoryListDetail slugCategory={props.params.slug} />
    </Suspense>
  )
}
