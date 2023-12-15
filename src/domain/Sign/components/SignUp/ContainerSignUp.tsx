"use client"

import { MENU } from "@/domain/Menu/constants/constants"
import { UIFormSignUp } from "@/domain/Sign/components/SignUp/components/UIFormSignUp/UIFormSignUp"
import { TPathFormSign } from "@/domain/Sign/types/types"
import { useRouter } from "next/navigation"
import { actionSignUp } from "@/domain/Sign/components/SignUp/actions/actionSignUp"
import { Alert } from "antd"
import { useState } from "react"

export function ContainerSignUp() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState<boolean>(false)

  const fragmentError = getFragmentError()

  async function submit(values: any) {
    if (pending) return

    setPending(true)
    setError(null)

    try {
      const response = await actionSignUp(values)

      if (response.uid) router.push(MENU.store.path)
      else throw Error("Sign up: failed data response")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setPending(false)
    }
  }

  function submitFailure() {
    setError(null)
  }

  function getFragmentError() {
    return error ? <Alert message={error} type="error" showIcon /> : null
  }

  // eslint-disable-next-line react/jsx-no-undef
  return (
    <div>
      <UIFormSignUp
        pending={pending}
        onSubmit={submit}
        onSubmitFailure={submitFailure}
        hrefToggleForm={TPathFormSign.signIn}
      />
      {fragmentError}
    </div>
  )
}
