import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

interface IProps {
  open: boolean
}

export function UIIconMenu(props: IProps) {
  return props.open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
}
