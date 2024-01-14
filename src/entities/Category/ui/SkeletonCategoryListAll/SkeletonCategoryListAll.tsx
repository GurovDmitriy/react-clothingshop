"use client"

import { UIGrid } from "@/shared/ui/UIGrid/UIGrid"
import { Card, Skeleton } from "antd"

export function SkeletonCategoryListAll() {
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
