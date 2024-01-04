import { messageRequired } from "@/domain/Validation/message/messageRequired"
import { Rule } from "antd/es/form"

export function ruleRequired(): Rule {
  return {
    required: true,
    message: messageRequired(),
  }
}
