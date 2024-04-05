"use client"

import { ContainerFooter } from "@/feature/Footer"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { UIContainer } from "@/shared/ui/UIContainer/UIContainer"
import { UILogo } from "@/shared/ui/UILogo/UILogo"
import { Layout } from "antd"
import styles from "./styles.module.scss"

const { Content, Header, Footer } = Layout

export default function LayoutSign(props: IPropsChildrenNode) {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <UILogo />
      </Header>
      <Content className={styles.content}>
        <UIContainer>
          <div className={styles.form}>{props.children}</div>
        </UIContainer>
      </Content>
      <ContainerFooter />
    </Layout>
  )
}
