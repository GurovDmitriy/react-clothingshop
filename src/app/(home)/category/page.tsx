import { SkeletonCategoryListAll } from "@/entities/Category"
import { ContainerCategoryListAll } from "@/feature/Category"
import { UIGridMain } from "@/shared/ui/UIGridMaiin/UIGridMain"
import { Suspense } from "react"

export default function PageShop() {
  return (
    <UIGridMain>
      <Suspense fallback={<SkeletonCategoryListAll />}>
        <ContainerCategoryListAll />
      </Suspense>
    </UIGridMain>
  )
}
