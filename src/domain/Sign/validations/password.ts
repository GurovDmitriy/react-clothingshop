import { Rule } from "antd/es/form"
import { ruleRequired } from "@/domain/Validation/rule/ruleRequired"
import { ruleMin } from "@/domain/Validation/rule/ruleMin"

export const password: Rule[] = [ruleRequired(), ruleMin(6)]
