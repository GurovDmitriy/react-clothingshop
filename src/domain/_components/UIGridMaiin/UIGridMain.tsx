import { Col, Row } from "antd"
import { IPropsChildrenNode } from "@/lib/types/definitions"

export function UIGridMain(props: IPropsChildrenNode) {
  return (
    <Row>
      <Col md={24} xl={16}>
        {props.children}
      </Col>
    </Row>
  )
}
