import { Rule } from "antd/es/form"
import { messageMin } from "@/lib/validations/message/messageMin"

export function ruleMin(count: number): Rule {
  return {
    min: count,
    message: messageMin(count),
  }
}
