"use client"

import { ContainerErrorGlobal } from "@/feature/Error/ui"
import { IPropsErrorGlobal } from "@/shared/lib/types/definitions"

export default function PageErrorGlobal(props: IPropsErrorGlobal) {
  return <ContainerErrorGlobal error={props.error} reset={props.reset} />
}
