import { ruleMin } from "@/domain/Validation/rule/ruleMin"
import { ruleRequired } from "@/domain/Validation/rule/ruleRequired"
import { Rule } from "antd/es/form"

export const password: Rule[] = [ruleRequired(), ruleMin(6)]
