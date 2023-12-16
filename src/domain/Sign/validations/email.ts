import { Rule } from "antd/es/form"
import { ruleRequired } from "@/lib/validations/rule/ruleRequired"
import { ruleEmail } from "@/lib/validations/rule/ruleEmail"

export const email: Rule[] = [ruleEmail(), ruleRequired()]
