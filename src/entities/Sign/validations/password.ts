import { ruleMin } from "@/shared/validation/rule/ruleMin"
import { ruleRequired } from "@/shared/validation/rule/ruleRequired"
import { Rule } from "antd/es/form"

export const password: Rule[] = [ruleRequired(), ruleMin(6)]
