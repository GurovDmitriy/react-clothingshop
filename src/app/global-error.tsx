"use client"

import { IPropsErrorGlobal } from "@/lib/types/definitions"
import { ContainerErrorGlobal } from "@/domain/Error/_domain/ErrorGlobal/ContainerErrorGlobal"

export default function PageErrorGlobal(props: IPropsErrorGlobal) {
  return <ContainerErrorGlobal error={props.error} reset={props.reset} />
}
