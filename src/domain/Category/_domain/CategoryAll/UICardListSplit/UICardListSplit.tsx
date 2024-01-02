"use client"

import { ICategoryAll } from "@/domain/Category/_domain/CategoryAll/types/types"
import { IProduct, IProductAction } from "@/domain/Category/types/types"
import { UICardProduct } from "@/domain/Category/components/UICardProduct/UICardProduct"
import { UIGrid } from "@/domain/_components/UIGrid/UIGrid"
import { Typography } from "antd"
import Link from "next/link"
import styles from "./styles.module.scss"
import { ArrowRightOutlined } from "@ant-design/icons"

const { Title } = Typography

interface IProps extends IProductAction {
  entity: ICategoryAll[]
}

export function UICardListSplit(props: IProps) {
  const list = renderlist()

  function renderlist() {
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
          add={() => props.add(item.id)}
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
