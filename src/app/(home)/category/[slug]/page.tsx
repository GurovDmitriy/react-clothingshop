import { ContainerCategoryDetail } from "@/domain/Category/_domain/CategoryDetail/ContainerCategoryDetail"
import { SkeletonCardCategory } from "@/domain/Category/_domain/CategoryAll/components/SkeletonCardCategory/SkeletonCardCategory"
import { Suspense } from "react"

interface IProps {
  params: {
    slug: string
  }
}

export default function PageCategory(props: IProps) {
  return (
    <Suspense fallback={<SkeletonCardCategory />}>
      <ContainerCategoryDetail slugCategory={props.params.slug} />
    </Suspense>
  )
}
