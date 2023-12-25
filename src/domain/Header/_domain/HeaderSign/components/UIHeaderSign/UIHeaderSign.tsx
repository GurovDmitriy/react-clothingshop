import { UILogo } from "@/domain/_components/UILogo/UILogo"
import { Layout } from "antd"
import styles from "./styles.module.scss"

const { Header } = Layout

export function UIHeaderSign() {
  return (
    <Header className={styles.header}>
      <UILogo />
    </Header>
  )
}
