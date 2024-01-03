"use client"

import { Button } from "antd"
import { useContextAuthMethods } from "@/domain/Sign/providers/ProviderAuth"

export default function PageProfile() {
  const signMethods = useContextAuthMethods()

  return (
    <div>
      <h2>Profile</h2>
      <Button onClick={signMethods.signOut}>Sign out</Button>
    </div>
  )
}
