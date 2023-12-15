"use client"

import { IUserDetail } from "@/domain/User/types/types"
import { EditOutlined, LogoutOutlined } from "@ant-design/icons"
import { Card } from "antd"
const { Meta } = Card

interface IProps {
  entity?: IUserDetail
  loading?: boolean
}

export async function UIUserDetail(props: IProps) {
  const actions = [
    <EditOutlined key="edit" />,
    <LogoutOutlined key="signout" />,
  ]

  return (
    <Card actions={actions} loading={props.loading}>
      <Meta title={props.entity?.username} description={props.entity?.email} />
    </Card>
  )
}
