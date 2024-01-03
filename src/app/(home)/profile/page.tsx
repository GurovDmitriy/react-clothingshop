"use client"

import { Button, Typography } from "antd"
import { useContextAuthMethods } from "@/domain/Sign/providers/ProviderAuth"

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
