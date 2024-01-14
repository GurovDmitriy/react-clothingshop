import { IMenu } from "@/entities/Header"
import { UIIconMenu } from "@/entities/Header/ui/UIIconMenu/UIIconMenu"
import { IPropsClassName } from "@/shared/lib/types/definitions"
import { Button } from "antd"

interface IProps extends IMenu, IPropsClassName {}

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
