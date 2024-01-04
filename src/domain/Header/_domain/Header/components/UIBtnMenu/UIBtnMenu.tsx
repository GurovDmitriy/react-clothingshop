import { UIIconMenu } from "@/domain/Header/_domain/Header/components/UIIconMenu/UIIconMenu"
import { IPropsClassName } from "@/lib/types/definitions"
import { Button } from "antd"

interface IProps extends IPropsClassName {
  open: boolean
  onClick(): void
}

export function UIBtnMenu(props: IProps) {
  return (
    <Button
      className={props.className}
      type="text"
      icon={<UIIconMenu open={props.open} />}
      onClick={props.onClick}
    />
  )
}
