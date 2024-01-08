import { ContainerCategoryAll } from "@/domain/Category/_domain/CategoryAll/ContainerCategoryAll"
import { SkeletonCardCategory } from "@/domain/Category/_domain/CategoryAll/components/SkeletonCardCategory/SkeletonCardCategory"
import { UIGridMain } from "@/shared/ui/UIGridMaiin/UIGridMain"
import { Suspense } from "react"

export default function PageShop() {
  return (
    <UIGridMain>
      <Suspense fallback={<SkeletonCardCategory />}>
        <ContainerCategoryAll />
      </Suspense>
    </UIGridMain>
  )
}
