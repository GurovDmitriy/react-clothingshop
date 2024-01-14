"use client"

import { IError } from "@/entities/Sign"
import { Alert } from "antd"

interface IProps extends IError {}

export function UIAlertError(props: IProps) {
  return props.error ? (
    <Alert message={props.error.message} type="error" showIcon />
  ) : null
}
