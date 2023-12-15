import { UIBtnMenu } from "@/domain/Header/components/Header/components/UIBtnMenu/UIBtnMenu"
import { UILogo } from "@/ui/UILogo/UILogo"
import { Layout } from "antd"
import styles from "./styles.module.scss"

const { Header } = Layout

interface IProps {
  open: boolean
  onClick(): void
}

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
