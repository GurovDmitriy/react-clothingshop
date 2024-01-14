"use client"

import { UIFormSignIn } from "@/entities/Sign"
import { useContextAuthMethods } from "@/entities/Sign/providers/ProviderAuth"
import { TPathFormSign } from "@/entities/Sign/types/types"
import { UIAlertError } from "@/entities/Sign/ui/UIAlertError/UIAlertError"

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
      <UIAlertError error={auth.signIn.error} />
    </div>
  )
}
