import { ICartMethods, ICartProduct } from "@/entities/Cart"
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons"
import { Button, List } from "antd"
import Image from "next/image"

type TProps = Pick<ICartMethods, "increase" | "decrease" | "remove"> & {
  entity: ICartProduct[]
}

export function UICartList(props: TProps) {
  function renderItem(item: ICartProduct) {
    return (
      <List.Item
        key={item.id}
        actions={[
          item.count,
          `${item.price}$`,
          <Button
            size="small"
            key="increase"
            type="text"
            onClick={() => props.increase(item)}
            icon={<PlusCircleOutlined />}
          />,
          <Button
            size="small"
            key="decrease"
            type="text"
            onClick={() => props.decrease(item)}
            icon={<MinusCircleOutlined />}
          />,
          <Button
            size="small"
            key="remove"
            type="text"
            onClick={() => props.remove(item)}
            icon={<DeleteOutlined />}
          />,
        ]}
        extra={
          <Image
            width={100}
            height={100}
            alt="image preview"
            src={item.imageUrl}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        }
      >
        {item.name}
      </List.Item>
    )
  }

  return (
    <div>
      <List
        dataSource={props.entity}
        itemLayout="vertical"
        renderItem={renderItem}
      />
    </div>
  )
}
