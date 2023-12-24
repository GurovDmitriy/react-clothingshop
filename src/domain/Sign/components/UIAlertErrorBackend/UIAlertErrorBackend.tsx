"use client"

import { Alert } from "antd"
import { IErrorBackend } from "@/domain/Sign/types/types"

interface IProps extends IErrorBackend {}

export function UIAlertErrorBackend(props: IProps) {
  return props.error ? (
    <Alert message={props.error.message} type="error" showIcon />
  ) : null
}
