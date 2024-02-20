import { IModelCart } from "@/entities/Cart"
import { Alert } from "antd"

interface IProps extends Pick<IModelCart, "total"> {}

export function UICartSummary(props: IProps) {
  return <Alert type="info" message={`Total: ${props.total}$`} />
}
