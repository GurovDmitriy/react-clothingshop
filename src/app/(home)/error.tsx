"use client"

import { ContainerError } from "@/domain/Error/components/Error/ContainerError"
import { IPropsError } from "@/lib/types/definitions"

export default function PageError(props: IPropsError) {
  return <ContainerError error={props.error} reset={props.reset} />
}
