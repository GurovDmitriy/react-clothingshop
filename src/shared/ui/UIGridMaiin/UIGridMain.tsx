import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { Col, Row } from "antd"

export function UIGridMain(props: IPropsChildrenNode) {
  return (
    <Row>
      <Col md={24} xl={16}>
        {props.children}
      </Col>
    </Row>
  )
}
