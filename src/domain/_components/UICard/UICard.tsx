"use client"

import { Card } from "antd"
import Image from "next/image"

const { Meta } = Card

interface IProps {
  image: string
  caption?: string
  description?: string
  actions?: Array<React.ReactNode>
}

export function UICard(props: IProps) {
  const fragmentImage = (
    <Image
      src={props.image}
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
    <Card cover={fragmentImage} actions={props.actions}>
      <Meta title={props.caption} description={props.description} />
    </Card>
  )
}
