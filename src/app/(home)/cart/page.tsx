import { Col, Row } from "antd"
import { Suspense } from "react"

export default function PageCart() {
  return (
    <div>
      <h2>Cart</h2>
      <Row>
        <Col xs={24} md={12} xl={6}>
          <Suspense fallback={"loading..."}>
            <div>cart</div>
          </Suspense>
        </Col>
      </Row>
    </div>
  )
}
