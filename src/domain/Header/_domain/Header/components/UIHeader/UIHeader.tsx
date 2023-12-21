import { UILogo } from "@/domain/_components/ui/UILogo/UILogo"
import { Layout } from "antd"
import styles from "./styles.module.scss"
import { UIBtnMenu } from "@/domain/Header/_domain/Header/components/UIBtnMenu/UIBtnMenu"

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
