import { LoadingOutlined } from "@ant-design/icons"
import styles from "./styles.module.scss"

interface IProps {
  icon?: React.ReactNode
}

export function UISpinner(props: IProps) {
  const iconElement = props.icon ?? <LoadingOutlined className={styles.icon} />

  return (
    <div className={styles["spinner-wrapper"]} data-testid="spinner">
      {iconElement}
    </div>
  )
}
