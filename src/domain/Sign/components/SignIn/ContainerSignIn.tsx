"use client"

import { MENU } from "@/domain/Menu/constants/constants"
import { UIFormSignIn } from "@/domain/Sign/components/SignIn/components/UIFormSignIn/UIFormSignIn"
import { TPathFormSign } from "@/domain/Sign/types/types"
import { useRouter } from "next/navigation"

export function ContainerSignIn() {
  const router = useRouter()

  function handleSubmit() {
    // validate form
    // send form

    router.push(MENU.events.path)
  }

  return (
    <UIFormSignIn
      onSubmit={handleSubmit}
      hrefToggleForm={TPathFormSign.signUp}
    />
  )
}
