import { ICartState } from "@/domain/Cart/types/types"
import { Alert } from "antd"

type TProps = Pick<ICartState, "total">

export function UICartSummary(props: TProps) {
  return <Alert type="info" message={`Total: ${props.total}$`} />
}
