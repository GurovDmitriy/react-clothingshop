"use client"

import { ICategoryAll, IProduct } from "@/entities/Category"
import { UIGrid } from "@/shared/ui/UIGrid/UIGrid"
import { Typography } from "antd"
import Link from "next/link"
import styles from "./styles.module.scss"

const { Title } = Typography

interface IProps<I, P> {
  entity: ICategoryAll<I, P>[]
  children(item: IProduct<I, P>): React.ReactNode
}

export function UICategoryListAll<I, P>(props: IProps<I, P>) {
  const list = renderList()

  function renderList() {
    return props.entity.map((category) => {
      return (
        <div key={category.id} className={styles.category}>
          <Link href={category.link} className={styles.caption}>
            <Title level={3} type="secondary" className={styles.category}>
              {category.title}
            </Title>
          </Link>
          <UIGrid>{category.items.map((item) => props.children(item))}</UIGrid>
        </div>
      )
    })
  }

  return <div>{list}</div>
}
