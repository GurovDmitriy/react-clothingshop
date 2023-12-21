import { Rule } from "antd/es/form"
import { messageMin } from "@/domain/Validation/message/messageMin"

export function ruleMin(count: number): Rule {
  return {
    min: count,
    message: messageMin(count),
  }
}
