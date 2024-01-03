import { ContainerCategoryAll } from "@/domain/Category/_domain/CategoryAll/ContainerCategoryAll"
import { Suspense } from "react"
import { SkeletonCardCategory } from "@/domain/Category/_domain/CategoryAll/components/SkeletonCardCategory/SkeletonCardCategory"
import { UIGridMain } from "@/domain/_components/UIGridMaiin/UIGridMain"

export default function PageShop() {
  return (
    <UIGridMain>
      <Suspense fallback={<SkeletonCardCategory />}>
        <ContainerCategoryAll />
      </Suspense>
    </UIGridMain>
  )
}
