import { MENU } from "@/domain/Menu/constants/constants"
import { CalendarOutlined, UserOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"

const list = [
  {
    key: MENU.store.name,
    icon: <CalendarOutlined />,
    label: <Link href={MENU.store.path}>{MENU.store.name}</Link>,
  },
  {
    key: MENU.cart.name,
    icon: <UserOutlined />,
    label: <Link href={MENU.cart.path}>{MENU.cart.name}</Link>,
  },
]

export function ContainerMenu() {
  const pathName = usePathname()
  const selectedKeys = getSelectedKeys()

  function getSelectedKeys() {
    const startPath = pathName ? pathName.split("/")[1] : ""
    const element =
      list.find((item) => item.key === startPath)?.key ?? MENU.store.name
    return [element]
  }

  return <Menu mode="inline" items={list} selectedKeys={selectedKeys} />
}
