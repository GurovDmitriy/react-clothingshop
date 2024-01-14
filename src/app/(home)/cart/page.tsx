"use client"

import { ContainerCart } from "@/feature/Cart"
import { Col, Row, Typography } from "antd"

const { Title } = Typography

export default function PageCart() {
  return (
    <div>
      <Title level={2} type="secondary">
        Cart
      </Title>
      <Row>
        <Col xs={24} md={12}>
          <ContainerCart />
        </Col>
      </Row>
    </div>
  )
}
