"use client"

import { ContainerErrorGlobal } from "@/domain/Error/_domain/ErrorGlobal/ContainerErrorGlobal"
import { IPropsErrorGlobal } from "@/shared/lib/types/definitions"

export default function PageErrorGlobal(props: IPropsErrorGlobal) {
  return <ContainerErrorGlobal error={props.error} reset={props.reset} />
}
