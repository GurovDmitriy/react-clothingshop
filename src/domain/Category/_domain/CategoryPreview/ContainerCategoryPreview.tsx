import { actionCategoryPreview } from "@/domain/Category/_domain/CategoryPreview/actions/actionCategoryPreview"
import { UICardCategory } from "@/domain/Category/_domain/CategoryPreview/components/UICardCategory/UICardCategory"
import { UICardGrid } from "@/domain/Category/_domain/CategoryPreview/components/UICardGrid/UICardGrid"
import { Col, Row } from "antd"

export async function ContainerCategoryPreview() {
  const data = await actionCategoryPreview()

  const list = renderList()

  function renderList() {
    return data.map((item) => <UICardCategory key={item.id} entity={item} />)
  }

  return (
    <Row>
      <Col xs={24} lg={12}>
        <UICardGrid>{list}</UICardGrid>
      </Col>
    </Row>
  )
}
