import { IPropsClassName } from "@/lib/types/definitions"
import { Typography } from "antd"

const { Title } = Typography

export function UILogo(props: IPropsClassName) {
  return (
    <div className={props.className}>
      <Title
        level={1}
        style={{ fontSize: "inherit", fontWeight: "normal", marginBottom: "0" }}
      >
        Clothing Shop
      </Title>
    </div>
  )
}
