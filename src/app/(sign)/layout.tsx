"use client"

import { UIHeaderSign } from "@/entities/Header"
import { ContainerFooter } from "@/feature/Footer"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { UIContainer } from "@/shared/ui/UIContainer/UIContainer"
import { Layout } from "antd"
import styles from "./styles.module.scss"

const { Content } = Layout

export default function LayoutSign(props: IPropsChildrenNode) {
  return (
    <Layout className={styles.layout}>
      <UIHeaderSign />
      <Content className={styles.content}>
        <UIContainer>
          <div className={styles.form}>{props.children}</div>
        </UIContainer>
      </Content>
      <ContainerFooter />
    </Layout>
  )
}
