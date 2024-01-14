import {
  IPropsChildrenNode,
  IPropsClassName,
} from "@/shared/lib/types/definitions"
import { Typography } from "antd"

const { Title } = Typography

interface IProps extends IPropsChildrenNode, IPropsClassName {}

export function UICopyright(props: IProps) {
  return (
    <div className={props.className}>
      <Title
        level={3}
        type="secondary"
        style={{ fontSize: "inherit", fontWeight: "normal" }}
      >
        {props.children}
      </Title>
    </div>
  )
}
