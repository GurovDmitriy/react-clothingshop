"use client"

import { UIFormSignIn } from "@/domain/Sign/_domain/SignIn/components/UIFormSignIn/UIFormSignIn"
import { TPathFormSign } from "@/domain/Sign/types/types"
import { UIAlertErrorBackend } from "@/domain/Sign/components/UIAlertErrorBackend/UIAlertErrorBackend"
import { useContextAuthMethods } from "@/domain/Sign/providers/ProviderAuth"

export function ContainerSignIn() {
  const auth = useContextAuthMethods()

  return (
    <div>
      <UIFormSignIn
        pending={auth.signIn.pending || auth.signWithGoogle.pending}
        onSubmit={auth.signIn.fetch}
        onSignGoogle={auth.signWithGoogle.fetch}
        hrefToggleForm={TPathFormSign.signUp}
      />
      <UIAlertErrorBackend error={auth.signIn.error} />
    </div>
  )
}
