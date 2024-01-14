import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { Layout } from "antd"
import styles from "./style.module.scss"

const { Footer } = Layout

export function UIFooter(props: IPropsChildrenNode) {
  return <Footer className={styles.footer}>{props.children}</Footer>
}
