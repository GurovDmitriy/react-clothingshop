"use client"

import { Alert } from "antd"

interface IProps {
  error: Error | null
}

export function UIAlertErrorBackend(props: IProps) {
  return props.error ? (
    <Alert message={props.error.message} type="error" showIcon />
  ) : null
}
