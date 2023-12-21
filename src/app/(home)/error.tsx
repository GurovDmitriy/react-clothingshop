"use client"

import { IPropsError } from "@/lib/types/definitions"
import { ContainerError } from "@/domain/Error/_domain/Error/ContainerError"

export default function PageError(props: IPropsError) {
  return <ContainerError error={props.error} reset={props.reset} />
}
