import { IPropsChildrenNode } from "@/lib/types/definitions"
import styles from "./styles.module.scss"

export function UIGrid(props: IPropsChildrenNode) {
  return <div className={styles.container}>{props.children}</div>
}
