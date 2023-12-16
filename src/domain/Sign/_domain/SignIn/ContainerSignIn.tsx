"use client"

import { useRouter } from "next/navigation"
import { useStateFetch } from "@/hooks/useStateFetch"
import { SignPayload } from "@/store/auth/authType"
import { actionSignIn } from "@/domain/Sign/_domain/SignIn/actions/actionSignIn"
import { UIFormSignIn } from "@/domain/Sign/_domain/SignIn/components/UIFormSignIn/UIFormSignIn"
import { TPathFormSign } from "@/domain/Sign/types/types"
import { UIAlertErrorBackend } from "@/domain/Sign/components/UIAlertErrorBackend/UIAlertErrorBackend"
import { useEffect } from "react"

export function ContainerSignIn() {
  const router = useRouter()

  const { fetch, data, pending, error } = useStateFetch((values: SignPayload) =>
    actionSignIn(values),
  )

  async function submit(values: any) {
    await fetch(values)
  }

  useEffect(() => {
    if (data && data.user.uid) {
      router.push("/")
    }
  }, [pending, data])

  return (
    <div>
      <UIFormSignIn
        pending={pending}
        onSubmit={submit}
        hrefToggleForm={TPathFormSign.signUp}
      />
      <UIAlertErrorBackend error={error} />
    </div>
  )
}
