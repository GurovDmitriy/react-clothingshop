import styles from "./styles.module.scss"
import { ContainerCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/ContainerCategoryPreview"
import { Suspense } from "react"

export default function PageHome() {
  return (
    <div className={styles.page}>
      <Suspense fallback={"Loading..."}>
        <ContainerCategoryPreview />
      </Suspense>
    </div>
  )
}
