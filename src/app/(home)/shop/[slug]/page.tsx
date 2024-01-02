import { ContainerCategoryDetail } from "@/domain/Category/_domain/CategoryDetail/ContainerCategoryDetail"

interface IProps {
  params: {
    slug: string
  }
}

export default function PageCategory(props: IProps) {
  return (
    <div>
      <ContainerCategoryDetail slugCategory={props.params.slug} />
    </div>
  )
}
