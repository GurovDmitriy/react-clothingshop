"use client"

import { ProviderCart } from "@/entities/Cart"
import { ContainerFooter } from "@/feature/Footer"
import { ContainerMenu } from "@/feature/Menu"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { UIBtnMenu } from "@/shared/ui/UIBtnMenu/UIBtnMenu"
import { UILogo } from "@/shared/ui/UILogo/UILogo"
import { Layout } from "antd"
import { useState } from "react"
import styles from "./styles.module.scss"

const { Sider, Content, Header, Footer } = Layout

export default function LayoutHome(props: IPropsChildrenNode) {
  const [collapsed, setCollapsed] = useState(false)

  function handleToggleMenu() {
    setCollapsed(!collapsed)
  }

  return (
    <ProviderCart>
      <Layout className={styles["ant-layout"]}>
        <Header className={styles.header}>
          <UIBtnMenu
            open={!collapsed}
            onClick={handleToggleMenu}
            className={styles.btn}
          />
          <UILogo />
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <ContainerMenu />
          </Sider>
          <Layout>
            <Content className={styles.content}>{props.children}</Content>
          </Layout>
        </Layout>
        <ContainerFooter />
      </Layout>
    </ProviderCart>
  )
}
