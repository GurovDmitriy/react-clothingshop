"use client"

import { ContainerError } from "@/domain/Error/_domain/Error/ContainerError"
import { IPropsError } from "@/shared/lib/types/definitions"

export default function PageError(props: IPropsError) {
  return <ContainerError error={props.error} reset={props.reset} />
}
