import { ContainerUser } from "@/domain/User/ContainerUser"
import { UIUserDetail } from "@/domain/User/components/UIUserDetail/UIUserDetail"
import { Col, Row } from "antd"
import { Suspense } from "react"

export default function PageCart() {
  return (
    <div>
      <h2>Settings</h2>
      <Row>
        <Col xs={24} md={12} xl={6}>
          <Suspense fallback={<UIUserDetail loading={true} />}>
            <ContainerUser />
          </Suspense>
        </Col>
      </Row>
    </div>
  )
}
