import { IPropsClassName } from "@/lib/types/definitions"

export function UICopyright(props: IPropsClassName) {
  return (
    <div className={props.className}>Copyright {new Date().getFullYear()}</div>
  )
}
