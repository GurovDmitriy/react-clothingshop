import { Rule } from "antd/es/form"
import { messageCorrect } from "@/domain/Validation/message/messageCorrect"

export function ruleEmail(emailLabel: string = "E-mail"): Rule {
  return {
    type: "email",
    message: messageCorrect(emailLabel),
  }
}
