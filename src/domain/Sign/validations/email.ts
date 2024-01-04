import { ruleEmail } from "@/domain/Validation/rule/ruleEmail"
import { ruleRequired } from "@/domain/Validation/rule/ruleRequired"
import { Rule } from "antd/es/form"

export const email: Rule[] = [ruleEmail(), ruleRequired()]
