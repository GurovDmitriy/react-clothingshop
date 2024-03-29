import { messageMin } from "@/shared/validation/message/messageMin"
import { Rule } from "antd/es/form"

export function ruleMin(count: number): Rule {
  return {
    min: count,
    message: messageMin(count),
  }
}
