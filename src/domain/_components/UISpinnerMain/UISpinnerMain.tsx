import { LoadingOutlined } from "@ant-design/icons"
import styles from "./styles.module.scss"

export function UISpinnerMain() {
  return (
    <div className={styles["spinner-wrapper"]}>
      <LoadingOutlined className={styles.icon} />
    </div>
  )
}
