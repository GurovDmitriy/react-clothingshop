"use client"

import { useContextAuthMethods } from "@/domain/Sign/providers/ProviderAuth"
import { Button, Typography } from "antd"

const { Title } = Typography

export default function PageProfile() {
  const signMethods = useContextAuthMethods()

  return (
    <div>
      <Title level={2} type="secondary">
        Profile
      </Title>
      <Button onClick={signMethods.signOut}>Sign out</Button>
    </div>
  )
}
