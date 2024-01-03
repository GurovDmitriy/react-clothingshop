"use client"

import { Col, Row } from "antd"
import { Suspense } from "react"
import { useContextAuthMethods } from "@/domain/Sign/providers/ProviderAuth"
import { ContainerCart } from "@/domain/Cart/ContainerCart"

export default function PageCart() {
  const signMethods = useContextAuthMethods()

  return (
    <div>
      <h2>Cart</h2>
      <Row>
        <Col xs={24} md={12}>
          <Suspense fallback={"loading..."}>
            <ContainerCart />
          </Suspense>
        </Col>
      </Row>
    </div>
  )
}
