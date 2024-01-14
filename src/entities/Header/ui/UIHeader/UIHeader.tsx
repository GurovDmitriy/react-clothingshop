import { IMenu } from "@/entities/Header"
import { UIBtnMenu } from "@/entities/Header/ui/UIBtnMenu/UIBtnMenu"
import { UILogo } from "@/shared/ui/UILogo/UILogo"
import { Layout } from "antd"
import styles from "./styles.module.scss"

const { Header } = Layout

interface IProps extends IMenu {}

export function UIHeader(props: IProps) {
  return (
    <Header className={styles.header}>
      <UIBtnMenu
        open={props.open}
        onClick={props.onClick}
        className={styles.btn}
      />
      <UILogo />
    </Header>
  )
}
