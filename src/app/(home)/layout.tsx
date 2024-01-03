"use client"

import { ContainerMenu } from "@/domain/Menu/ContainerMenu"
import { IPropsChildrenNode } from "@/lib/types/definitions"
import { Layout } from "antd"
import { useState } from "react"
import styles from "./styles.module.scss"
import { ContainerHeader } from "@/domain/Header/_domain/Header/ContainerHeader"
import { ContainerFooter } from "@/domain/Footer/_domain/Footer/ContainerFooter"
import { ProviderCart } from "@/domain/Cart/providers/ProviderCart"

const { Sider, Content } = Layout

export default function LayoutHome(props: IPropsChildrenNode) {
  const [collapsed, setCollapsed] = useState(false)

  function handleToggleMenu() {
    setCollapsed(!collapsed)
  }

  return (
    <ProviderCart>
      <Layout className={styles["ant-layout"]}>
        <ContainerHeader onClick={handleToggleMenu} open={!collapsed} />
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
