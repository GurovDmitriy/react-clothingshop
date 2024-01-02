import { MENU } from "@/domain/Menu/constants/constants"
import {
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"

const list = [
  {
    key: MENU.shop.name,
    icon: <ShopOutlined />,
    label: <Link href={MENU.shop.path}>{MENU.shop.name}</Link>,
  },
  {
    key: MENU.category.name,
    icon: <ShoppingOutlined />,
    label: <Link href={MENU.category.path}>{MENU.category.name}</Link>,
  },
  {
    key: MENU.cart.name,
    icon: <ShoppingCartOutlined />,
    label: <Link href={MENU.cart.path}>{MENU.cart.name}</Link>,
  },
]

export function ContainerMenu() {
  const pathName = usePathname()
  const selectedKeys = getSelectedKeys()

  function getSelectedKeys() {
    const startPath = pathName ? pathName.split("/")[1] : ""
    const element =
      list.find((item) => item.key === startPath)?.key ?? MENU.shop.name
    return [element]
  }

  return <Menu mode="inline" items={list} selectedKeys={selectedKeys} />
}
