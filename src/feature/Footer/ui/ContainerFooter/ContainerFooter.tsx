import { UICopyright } from "@/shared/ui/UICopyright/UICopyright"
import { Layout } from "antd"
import styles from "./style.module.scss"

const { Footer } = Layout

export function ContainerFooter() {
  return (
    <Footer className={styles.footer}>
      <UICopyright>
        Clothing Shop - Real World Clone for React and Next.js 2024
      </UICopyright>
    </Footer>
  )
}
