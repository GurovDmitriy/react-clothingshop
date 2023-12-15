import { Rule } from "antd/es/form"
import { messageRequired } from "@/lib/validations/message/messageRequired"

export function ruleRequired(): Rule {
  return {
    required: true,
    message: messageRequired(),
  }
}
