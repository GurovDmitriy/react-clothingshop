import styles from "./styles.module.scss"
import { ContainerCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/ContainerCategoryPreview"
import { Suspense } from "react"
import { SkeletonCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/components/SkeletonCategoryPreview/SkeletonCategoryPreview"

export default function PageHome() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<SkeletonCategoryPreview />}>
        <ContainerCategoryPreview />
      </Suspense>
    </div>
  )
}
