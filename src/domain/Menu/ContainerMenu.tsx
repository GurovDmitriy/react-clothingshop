import { useContextCartState } from "@/domain/Cart/providers/ProviderCart"
import { MENU } from "@/domain/Menu/constants/constants"
import {
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Badge, Menu } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ContainerMenu() {
  const cartState = useContextCartState()

  const countProducts = Object.values(cartState.cart).reduce(
    (prev, next) => prev + next.count,
    0,
  )

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
      icon: (
        <Badge
          count={countProducts}
          overflowCount={10}
          offset={[3, -2]}
          style={{ lineHeight: "1.2", fontSize: "10px" }}
          size="small"
        >
          <ShoppingCartOutlined />
        </Badge>
      ),
      label: <Link href={MENU.cart.path}>{MENU.cart.name}</Link>,
    },
    {
      key: MENU.profile.name,
      icon: <UserOutlined />,
      label: <Link href={MENU.profile.path}>{MENU.profile.name}</Link>,
    },
  ]

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
