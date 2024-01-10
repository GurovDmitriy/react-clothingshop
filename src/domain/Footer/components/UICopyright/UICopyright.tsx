import { IPropsClassName } from "@/shared/lib/types/definitions"
import { Typography } from "antd"

const { Title } = Typography

export function UICopyright(props: IPropsClassName) {
  return (
    <div className={props.className}>
      <Title
        level={3}
        type="secondary"
        style={{ fontSize: "inherit", fontWeight: "normal" }}
      >
        Clothing Shop - Real World Clone for React and Next.js 2024
      </Title>
    </div>
  )
}
