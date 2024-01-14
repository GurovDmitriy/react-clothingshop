"use client"

import { ContainerError } from "@/feature/Error/ui"
import { IPropsError } from "@/shared/lib/types/definitions"

export default function PageError(props: IPropsError) {
  return <ContainerError error={props.error} reset={props.reset} />
}
