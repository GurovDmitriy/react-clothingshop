import { ICategory } from "@/domain/Category/_domain/CategoryPreview/types/types"
import { UICard } from "@/domain/_components/UICard/UICard"
import Link from "next/link"
import styles from "./styles.module.scss"

interface IProps {
  entity: ICategory[]
}

export function UICardList(props: IProps) {
  const list = renderList()

  function renderList() {
    return props.entity.map((item) => (
      <Link href={item.link} key={item.id}>
        <UICard
          image={item.image}
          caption={item.caption}
          description={item.description}
        />
      </Link>
    ))
  }

  return <div className={styles.container}>{list}</div>
}
