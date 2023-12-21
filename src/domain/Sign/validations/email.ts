import { Rule } from "antd/es/form"
import { ruleEmail } from "@/domain/Validation/rule/ruleEmail"
import { ruleRequired } from "@/domain/Validation/rule/ruleRequired"

export const email: Rule[] = [ruleEmail(), ruleRequired()]
