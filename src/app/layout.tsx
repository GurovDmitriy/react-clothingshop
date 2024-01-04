import { ProviderAuth } from "@/domain/Sign/providers/ProviderAuth"
import "@/domain/_assets/styles/globals.scss"
import { IPropsChildrenNode } from "@/lib/types/definitions"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "React - Clothing Shop",
  description: "Clothing Shop - Real World Clone for React and Next.js 2023",
}

export default function LayoutRoot(props: IPropsChildrenNode) {
  return (
    <html lang="en">
      <body>
        <ProviderAuth>{props.children}</ProviderAuth>
      </body>
    </html>
  )
}
