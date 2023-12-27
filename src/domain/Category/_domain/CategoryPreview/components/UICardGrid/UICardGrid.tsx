"use client"

import { IPropsChildrenNode } from "@/lib/types/definitions"
import styles from "./styles.module.scss"

export function UICardGrid(props: IPropsChildrenNode) {
  return <div className={styles.container}>{props.children}</div>
}
