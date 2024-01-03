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
import { useContextCartState } from "@/domain/Cart/providers/ProviderCart"

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
      icon: <ShoppingCartOutlined />,
      label: (
        <Badge count={countProducts} overflowCount={10} offset={[10, 0]}>
          <Link href={MENU.cart.path}>{MENU.cart.name}</Link>
        </Badge>
      ),
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
