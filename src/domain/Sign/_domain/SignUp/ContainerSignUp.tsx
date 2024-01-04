"use client"

import { UIFormSignUp } from "@/domain/Sign/_domain/SignUp/components/UIFormSignUp/UIFormSignUp"
import { UIAlertErrorBackend } from "@/domain/Sign/components/UIAlertErrorBackend/UIAlertErrorBackend"
import { useContextAuthMethods } from "@/domain/Sign/providers/ProviderAuth"
import { TPathFormSign } from "@/domain/Sign/types/types"

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
      <UIAlertErrorBackend error={auth.signUp.error} />
    </div>
  )
}
