import { messageCorrect } from "@/shared/validation/message/messageCorrect"
import { Rule } from "antd/es/form"

export function ruleEmail(emailLabel: string = "E-mail"): Rule {
  return {
    type: "email",
    message: messageCorrect(emailLabel),
  }
}
