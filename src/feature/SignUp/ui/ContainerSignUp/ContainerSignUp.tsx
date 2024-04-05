"use client"

import { UIFormSignUp } from "@/entities/Sign"
import { useContextAuthMethods } from "@/entities/Sign/providers/ProviderAuth"
import { TPathFormSign } from "@/entities/Sign/types/types"
import { UIAlertError } from "@/entities/Sign/ui/UIAlertError/UIAlertError"

export function ContainerSignUp() {
  const auth = useContextAuthMethods()

  return (
    <div>
      <UIFormSignUp
        pending={auth.signUp.pending || auth.signWithGoogle.pending}
        onSubmit={auth.signUp.fetch}
        onSignGoogle={auth.signWithGoogle.fetch}
        hrefToggleForm={TPathFormSign.signIn}
      />
      <UIAlertError error={auth.signUp.error} />
    </div>
  )
}
