"use client"

import { Card } from "antd"
import Image from "next/image"
import { ICardCategory } from "@/domain/Category/types/types"
import Link from "next/link"

const { Meta } = Card

interface IProps {
  entity: ICardCategory
}

export function UICardCategory(props: IProps) {
  const image = (
    <Image
      src={props.entity.image}
      width={200}
      height={200}
      alt="image preview"
      style={{
        width: "100%",
        height: "150px",
        objectFit: "cover",
      }}
    />
  )

  return (
    <Link href={props.entity.link}>
      <Card cover={image}>
        <Meta
          title={props.entity.caption}
          description={props.entity.description}
        />
      </Card>
    </Link>
  )
}
