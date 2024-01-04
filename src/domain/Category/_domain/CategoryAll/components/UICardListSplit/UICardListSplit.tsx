"use client"

import { ICategoryAll } from "@/domain/Category/_domain/CategoryAll/types/types"
import { UICardProduct } from "@/domain/Category/components/UICardProduct/UICardProduct"
import { IProduct, IProductAction } from "@/domain/Category/types/types"
import { UIGrid } from "@/domain/_components/UIGrid/UIGrid"
import { Typography } from "antd"
import Link from "next/link"
import styles from "./styles.module.scss"

const { Title } = Typography

interface IProps extends IProductAction {
  entity: ICategoryAll[]
}

export function UICardListSplit(props: IProps) {
  const list = renderList()

  function renderList() {
    return props.entity.map((category) => {
      const cards = renderCards(category.items)

      return (
        <div key={category.id} className={styles.category}>
          <Link href={category.link} className={styles.caption}>
            <Title level={3} type="secondary" className={styles.category}>
              {category.title}
            </Title>
          </Link>
          <UIGrid>{cards}</UIGrid>
        </div>
      )
    })
  }

  function renderCards(card: IProduct[]) {
    return card.map((item) => {
      return (
        <UICardProduct
          key={item.id}
          add={() => props.add(item)}
          price={item.price}
          id={item.id}
          image={item.image}
          caption={item.caption}
        />
      )
    })
  }

  return <div>{list}</div>
}
