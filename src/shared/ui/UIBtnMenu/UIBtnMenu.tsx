import { IPropsClassName } from "@/shared/lib/types/definitions"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button } from "antd"

interface IProps extends IPropsClassName {
  open: boolean
  onClick(): void
}

export function UIBtnMenu(props: IProps) {
  const icon = props.open ? (
    <MenuUnfoldOutlined data-testid="iconMenuOpen" />
  ) : (
    <MenuFoldOutlined data-testid="iconMenuClose" />
  )

  return (
    <Button
      className={props.className}
      type="text"
      icon={icon}
      onClick={props.onClick}
    />
  )
}
