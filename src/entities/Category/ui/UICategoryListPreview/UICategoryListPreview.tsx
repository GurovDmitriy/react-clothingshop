import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import styles from "./styles.module.scss"

export function UICategoryListPreview(props: IPropsChildrenNode) {
  return <div className={styles.container}>{props.children}</div>
}
