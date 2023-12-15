"use client"

import { ContainerFooterSign } from "@/domain/Footer/components/FooterSign/ContainerFooterSign"
import { ContainerHeaderSign } from "@/domain/Header/components/HeaderSign/ContainerHeaderSign"
import { IPropsChildrenNode } from "@/lib/types/definitions"
import { UIContainer } from "@/ui/UIContainer/UIContainer"
import { Layout } from "antd"
import styles from "./styles.module.scss"

const { Content } = Layout

export default function LayoutSign(props: IPropsChildrenNode) {
  return (
    <Layout className={styles.layout}>
      <ContainerHeaderSign />
      <Content className={styles.content}>
        <UIContainer>
          <div className={styles.form}>{props.children}</div>
        </UIContainer>
      </Content>
      <ContainerFooterSign />
    </Layout>
  )
}
