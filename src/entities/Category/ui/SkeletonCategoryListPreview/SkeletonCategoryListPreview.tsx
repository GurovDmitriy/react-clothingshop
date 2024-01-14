"use client"

import { Col, Row, Skeleton } from "antd"
import styles from "./styles.module.scss"

export function SkeletonCategoryListPreview() {
  return (
    <Row>
      <Col xs={24} lg={12}>
        <div className={styles.container}>
          <Skeleton.Image
            active={true}
            style={{ width: "100%", height: "250px" }}
          />
          <Skeleton.Image
            active={true}
            style={{ width: "100%", height: "250px" }}
          />
          <Skeleton.Image
            active={true}
            style={{ width: "100%", height: "250px" }}
          />
          <Skeleton.Image
            active={true}
            style={{ width: "100%", height: "250px" }}
          />
          <Skeleton.Image
            active={true}
            style={{ width: "100%", height: "250px" }}
          />
        </div>
      </Col>
    </Row>
  )
}
