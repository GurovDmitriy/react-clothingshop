"use client"

import { ContainerFooterSign } from "@/domain/Footer/_domain/FooterSign/ContainerFooterSign"
import { ContainerHeaderSign } from "@/domain/Header/_domain/HeaderSign/ContainerHeaderSign"
import { UIContainer } from "@/domain/_components/UIContainer/UIContainer"
import { IPropsChildrenNode } from "@/lib/types/definitions"
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