"use client"

import { ProviderCart } from "@/entities/Cart"
import { UIHeader } from "@/entities/Header"
import { ContainerFooter } from "@/feature/Footer"
import { ContainerMenu } from "@/feature/Menu"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { Layout } from "antd"
import { useState } from "react"
import styles from "./styles.module.scss"

const { Sider, Content } = Layout

export default function LayoutHome(props: IPropsChildrenNode) {
  const [collapsed, setCollapsed] = useState(false)

  function handleToggleMenu() {
    setCollapsed(!collapsed)
  }

  return (
    <ProviderCart>
      <Layout className={styles["ant-layout"]}>
        <UIHeader onClick={handleToggleMenu} open={!collapsed} />
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
