import { ContainerCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/ContainerCategoryPreview"
import { SkeletonCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/components/SkeletonCategoryPreview/SkeletonCategoryPreview"
import { Suspense } from "react"
import styles from "./styles.module.scss"

export default function PageHome() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<SkeletonCategoryPreview />}>
        <ContainerCategoryPreview />
      </Suspense>
    </div>
  )
}
