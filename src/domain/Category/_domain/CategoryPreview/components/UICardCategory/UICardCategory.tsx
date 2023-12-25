import { Card } from "antd"
import Image from "next/image"
import { ICardCategory } from "@/domain/Category/types/types"

const { Meta } = Card

interface IProps {
  entity: ICardCategory
}

export function UICardCategory(props: IProps) {
  const image = <Image src={"#"} width={200} height={200} alt="image preview" />

  return (
    <Card cover={image}>
      <Meta
        title={props.entity.caption}
        description={props.entity.description}
      />
    </Card>
  )
}
