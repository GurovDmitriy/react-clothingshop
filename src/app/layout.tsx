"use client"

import { IPropsChildrenNode } from "@/lib/types/definitions"
import "../assets/styles/globals.scss"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/modules/firebaseSDK/config"
import { useEffect } from "react"

export default function LayoutRoot(props: IPropsChildrenNode) {
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      console.log("1")
      console.log(user)
      console.log(auth.currentUser)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid

        console.log(uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    })
  }, [])

  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
