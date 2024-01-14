import { ruleEmail } from "@/shared/validation/rule/ruleEmail"
import { ruleRequired } from "@/shared/validation/rule/ruleRequired"
import { Rule } from "antd/es/form"

export const email: Rule[] = [ruleEmail(), ruleRequired()]
