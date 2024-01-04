"use client"

import { IErrorBackend } from "@/domain/Sign/types/types"
import { Alert } from "antd"

interface IProps extends IErrorBackend {}

export function UIAlertErrorBackend(props: IProps) {
  return props.error ? (
    <Alert message={props.error.message} type="error" showIcon />
  ) : null
}
