import { useContextCartState } from "@/entities/Cart"
import { MENU } from "@/feature/Menu"
import { getCountProducts } from "@/feature/Menu/ui/ContainerMenu/utils/getCountProducts"
import { getSelectedKeys } from "@/feature/Menu/ui/ContainerMenu/utils/getSelectedKeys"
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

  const countProducts = getCountProducts(Object.values(cartState.cart))

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
        <Link href={MENU.cart.path}>
          <Badge
            count={countProducts}
            overflowCount={10}
            offset={[3, -2]}
            style={{ lineHeight: "1.2", fontSize: "10px" }}
            size="small"
          >
            {MENU.cart.name}
          </Badge>
        </Link>
      ),
    },
    {
      key: MENU.profile.name,
      icon: <UserOutlined />,
      label: <Link href={MENU.profile.path}>{MENU.profile.name}</Link>,
    },
  ]

  const pathName = usePathname()
  const selectedKeys = getSelectedKeys<typeof list>(
    pathName,
    list,
    MENU.shop.name,
  )

  return <Menu mode="inline" items={list} selectedKeys={selectedKeys} />
}
