"use client"

import { useRouter } from "next/navigation"
import { useStateFetch } from "@/hooks/useStateFetch"
import { actionSignUp } from "@/domain/Sign/_domain/SignUp/actions/actionSignUp"
import { UIFormSignUp } from "@/domain/Sign/_domain/SignUp/components/UIFormSignUp/UIFormSignUp"
import { ISignPayload, TPathFormSign } from "@/domain/Sign/types/types"
import { UIAlertErrorBackend } from "@/domain/Sign/components/UIAlertErrorBackend/UIAlertErrorBackend"
import { useEffect } from "react"

export function ContainerSignUp() {
  const router = useRouter()

  const { fetch, data, pending, error } = useStateFetch(
    (values: ISignPayload) => actionSignUp(values),
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
      <UIFormSignUp
        pending={pending}
        onSubmit={submit}
        hrefToggleForm={TPathFormSign.signIn}
      />
      <UIAlertErrorBackend error={error} />
    </div>
  )
}
