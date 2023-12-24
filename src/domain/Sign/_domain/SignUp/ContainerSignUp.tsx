"use client"

import { UIFormSignUp } from "@/domain/Sign/_domain/SignUp/components/UIFormSignUp/UIFormSignUp"
import { TPathFormSign } from "@/domain/Sign/types/types"
import { UIAlertErrorBackend } from "@/domain/Sign/components/UIAlertErrorBackend/UIAlertErrorBackend"
import { useContextAuthMethods } from "@/domain/Sign/providers/ProviderAuth"

export function ContainerSignUp() {
  const auth = useContextAuthMethods()

  async function submit(values: any) {
    await auth.signUp.fetch(values)
  }

  return (
    <div>
      <UIFormSignUp
        pending={auth.signUp.pending}
        onSubmit={submit}
        hrefToggleForm={TPathFormSign.signIn}
      />
      <UIAlertErrorBackend error={auth.signUp.error} />
    </div>
  )
}
