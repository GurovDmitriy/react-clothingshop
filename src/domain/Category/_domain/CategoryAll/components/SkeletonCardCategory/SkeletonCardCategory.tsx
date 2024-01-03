"use client"

import { Card, Skeleton } from "antd"
import { UIGrid } from "@/domain/_components/UIGrid/UIGrid"

export function SkeletonCardCategory() {
  const list = Array(8)
    .fill(null)
    .map((item, index) => (
      <Card
        key={index}
        actions={["...", "..."]}
        cover={
          <Skeleton.Image
            active={true}
            style={{ width: "100%", height: "150px" }}
          />
        }
      />
    ))

  return <UIGrid>{list}</UIGrid>
}
