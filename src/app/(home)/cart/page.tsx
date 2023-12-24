"use client"

import { Col, Row } from "antd"
import { Suspense } from "react"
import { useContextAuthMethods } from "@/domain/Sign/providers/ProviderAuth"

export default function PageCart() {
  const signMethods = useContextAuthMethods()

  return (
    <div>
      <h2>Cart</h2>
      <Row>
        <Col xs={24} md={12} xl={6}>
          <Suspense fallback={"loading..."}>
            <div>cart</div>
            <button onClick={signMethods.signOut}>signOut</button>
          </Suspense>
        </Col>
      </Row>
    </div>
  )
}
