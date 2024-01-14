"use client"

import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { UIGrid } from "@/shared/ui/UIGrid/UIGrid"

export function UICategoryList(props: IPropsChildrenNode) {
  return <UIGrid>{props.children}</UIGrid>
}
