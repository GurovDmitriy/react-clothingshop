import { SkeletonCategoryListPreview } from "@/entities/Category"
import { ContainerCategoryListPreview } from "@/feature/Category"
import { Suspense } from "react"
import styles from "./styles.module.scss"

export default function PageHome() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<SkeletonCategoryListPreview />}>
        <ContainerCategoryListPreview />
      </Suspense>
    </div>
  )
}
