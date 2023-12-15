import { MENU } from "@/domain/Menu/constants/constants"
import {
  CalendarOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"

const list = [
  {
    key: MENU.events.name,
    icon: <CalendarOutlined />,
    label: <Link href={MENU.events.path}>{MENU.events.name}</Link>,
  },
  {
    key: MENU.contacts.name,
    icon: <UserOutlined />,
    label: <Link href={MENU.contacts.path}>{MENU.contacts.name}</Link>,
  },
  {
    key: MENU.settings.name,
    icon: <SettingOutlined />,
    label: <Link href={MENU.settings.path}>{MENU.settings.name}</Link>,
  },
]

export function ContainerMenu() {
  const pathName = usePathname()
  const selectedKeys = getSelectedKeys()

  function getSelectedKeys() {
    const startPath = pathName.split("/")[1]
    const element =
      list.find((item) => item.key === startPath)?.key ?? MENU.events.name
    return [element]
  }

  return <Menu mode="inline" items={list} selectedKeys={selectedKeys} />
}
