import { Rule } from "antd/es/form"
import { ruleRequired } from "@/lib/validations/rule/ruleRequired"
import { ruleMin } from "@/lib/validations/rule/ruleMin"

export const password: Rule[] = [ruleRequired(), ruleMin(6)]
