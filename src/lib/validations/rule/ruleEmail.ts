import { Rule } from "antd/es/form"
import { messageCorrect } from "@/lib/validations/message/messageCorrect"

export function ruleEmail(emailLabel: string = "E-mail"): Rule {
  return {
    type: "email",
    message: messageCorrect(emailLabel),
  }
}
