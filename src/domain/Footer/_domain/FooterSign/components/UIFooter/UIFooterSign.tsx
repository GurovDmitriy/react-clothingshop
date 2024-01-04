import { UICopyright } from "@/domain/Footer/components/UICopyright/UICopyright"
import { Layout } from "antd"
import styles from "./style.module.scss"

const { Footer } = Layout

export function UIFooterSign() {
  return (
    <Footer className={styles.footer}>
      <UICopyright />
    </Footer>
  )
}