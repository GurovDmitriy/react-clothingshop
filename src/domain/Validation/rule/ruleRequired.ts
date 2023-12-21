import { Rule } from "antd/es/form"
import { messageRequired } from "@/domain/Validation/message/messageRequired"

export function ruleRequired(): Rule {
  return {
    required: true,
    message: messageRequired(),
  }
}
